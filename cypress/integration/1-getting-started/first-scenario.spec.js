/* eslint-disable no-undef */

describe('first-scenario', () => {
  it('fetch employees', () => {
    cy.visit('http://localhost:8080/');

    cy.request('https://fe-task.getsandbox.com/employees').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.employees.length).to.be.greaterThan(1);
    });

    cy.get('.top-links').within(() => {
      return cy
        .contains('Team performance chart page')
        .should('have.text', 'Team performance chart page')
        .click();
    });
    cy.url().should('eq', 'http://localhost:8080/team-performance');
  });
});
