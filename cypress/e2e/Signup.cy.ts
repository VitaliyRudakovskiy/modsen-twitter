/// <reference types="cypress" />

describe('Signup page', () => {
  it('should open signup in browser', () => {
    cy.visit('http://localhost:5173/signup');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/signup');
  });

  it('should display all the elements of Signup Page', () => {
    cy.get('[data-cy=signup-image]').should('be.visible');
    cy.get('[data-cy=signup-form]').should('be.visible');
  });

  it('should submit form with valid data', () => {
    cy.intercept('POST', '/signup', { statusCode: 200 });
    cy.get('[data-cy=signup-form-name]').type('John Doe');
    cy.get('[data-cy=signup-form-phone]').type('+375291234567');
    cy.get('[data-cy=signup-form-email]').type('test@example.com');
    cy.get('[data-cy=signup-form-password]').type('password');
    cy.get('[data-cy=signup-form-month]').select('March');
    cy.get('[data-cy=signup-form-day]').select('14');
    cy.get('[data-cy=signup-form-year]').select('2003');
    cy.get('[data-cy=signup-submit-button]').should('be.visible');
    cy.get('[data-cy=signup-submit-button]').click();
  });

  it('should redirect to auth page after clicking on "use email"', () => {
    cy.get('[data-cy=signup-email-link]').should('be.visible');
    cy.get('[data-cy=signup-email-link]').click();
    cy.url().should('include', '/auth');
  });
});
