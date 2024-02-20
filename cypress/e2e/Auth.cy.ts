/// <reference types="cypress" />

describe('Auth page', () => {
  it('should open auth in browser', () => {
    cy.visit('http://localhost:5173/auth');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/auth');
  });

  it('should display all the elements of Auth Page', () => {
    cy.get('[data-cy=auth-image]').should('be.visible');
    cy.get('[data-cy=auth-signup-buttons]').should('be.visible');
    cy.get('[data-cy=auth-footer-links]').should('be.visible');
    cy.get('[data-cy=auth-login-link]').should('be.visible');
  });

  it('should navigate to signup page when "Sign up with email" button is clicked', () => {
    cy.get('[data-cy=auth-signup-buttons] > :nth-child(2)').click();
    cy.url().should('include', '/signup');
  });

  it('should navigate to login page when "Log In" link is clicked', () => {
    cy.get('[data-cy=auth-login-link]').click();
    cy.url().should('include', '/login');
  });
});
