describe('empty spec', () => {
  it('passes', () => {
    const appURL = "http://localhost:4200/";
    cy.visit('http://localhost:4200/heroes')
    cy.contains("Dashboard").click();
    cy.url().should("include", "dashboard");
    cy.contains("Magneta").click();
    cy.url().should("include", "15");
    const testMessage = "JayMan"; // the message this test will type and check for
    cy.get("input[id^=hero-name]").clear().type(testMessage); // get the input box by it 'name' attribute and type in it
    cy.contains("save").click(); // "Send" the message
    cy.get("app-dashboard").should("contain", testMessage); // check that the message was sent
  })
})