/// <reference types="cypress" />

describe('Not Found page', () => {
  it('should open not found in browser', () => {
    cy.visit('http://localhost:5173/abracadabra');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/abracadabra');
  });

  it('should render correctly', () => {
    cy.contains('404').should('be.visible');
    cy.contains('Page not found').should('be.visible');
    cy.contains(
      'The link you clicked may be broken or the page may have been removed.'
    ).should('be.visible');
    cy.contains('Back to Home Page').should('be.visible');
    cy.contains('Back to Home Page').click();
  });
});
