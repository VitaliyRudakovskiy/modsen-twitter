/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    displaySidebar(): Chainable<void>;
  }
}

Cypress.Commands.add('displaySidebar', () => {
  cy.get('[data-cy=sidebar-Home]').should('be.visible');
  cy.get('[data-cy=sidebar-Explore]').should('be.visible');
  cy.get('[data-cy=sidebar-Notification]').should('be.visible');
  cy.get('[data-cy=sidebar-Messages]').should('be.visible');
  cy.get('[data-cy=sidebar-Bookmarks]').should('be.visible');
  cy.get('[data-cy=sidebar-Lists]').should('be.visible');
  cy.get('[data-cy=sidebar-Profile]').should('be.visible');
  cy.get('[data-cy=sidebar-More]').should('be.visible');

  cy.get('[data-cy=sidebar-tweet-button]').should('be.visible');
  cy.get('[data-cy=sidebar-profile-wrapper]').should('be.visible');
  cy.get('[data-cy=sidebar-logout-button]').should('be.visible');
});
