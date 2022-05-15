/* eslint-disable quotes */
/* eslint-disable no-undef */

describe("second-scenario", () => {
  it("load more button", () => {
    cy.visit("http://localhost:8080/");

    cy.request("https://fe-task.getsandbox.com/employees").then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.get(".c-button").within(() => {
      return cy.contains("Load More").click();
    });
  });
});
