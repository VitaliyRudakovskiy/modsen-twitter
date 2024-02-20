/// <reference types="cypress" />

describe('Home page', () => {
  it('should open home in browser', () => {
    cy.visit('http://localhost:5173');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should display all the elements of Home Page', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('[data-cy=login-form-phoneOrEmail]').type('asd@asd.asd');
    cy.get('[data-cy=login-form-password]').type('asdasd');
    cy.get('[data-cy=login-submit-button]').click();

    cy.get('[data-cy=sidebar]').should('be.visible');
    cy.get('[data-cy=feed]').should('be.visible');
    cy.get('[data-cy=searchbar]').should('be.visible');
  });

  it('should display all the elements of Sidebar', () => {
    cy.displaySidebar();
  });

  it('should open tweet modal after click on tweet button and close on X', () => {
    cy.get('[data-cy=sidebar-tweet-button]').click();
    cy.get('[data-cy=tweet-modal]').should('be.visible');
    cy.get('[data-cy=tweet-modal-close-button]').click();
  });

  it('should log out user when logout button is clicked', () => {
    cy.get('[data-cy=sidebar-logout-button]').click();
    cy.url().should('include', '/auth');
    cy.visit('http://localhost:5173');
  });
});
