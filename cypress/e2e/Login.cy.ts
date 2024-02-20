/// <reference types="cypress" />

describe('Login page', () => {
  it('should open login in browser', () => {
    cy.visit('http://localhost:5173/login');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display all the elements of Login Page', () => {
    cy.get('[data-cy=login-image]').should('be.visible');
    cy.get('[data-cy=login-form]').should('be.visible');
  });

  it('should submit form with valid data', () => {
    cy.intercept('POST', '/signup', { statusCode: 200 });
    cy.get('[data-cy=login-form-phoneOrEmail]').type('asd@asd.asd');
    cy.get('[data-cy=login-form-password]').type('asdasd');
    cy.get('[data-cy=login-submit-button]').should('be.visible');
    cy.get('[data-cy=login-submit-button]').click();
  });

  it('should redirect to signup page after clicking on "Sign up to twitter"', () => {
    cy.get('[data-cy=signup-twitter-link]').should('be.visible');
    cy.get('[data-cy=signup-twitter-link]').click();
    cy.url().should('include', '/signup');
  });
});
