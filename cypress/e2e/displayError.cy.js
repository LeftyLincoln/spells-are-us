describe("Error", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://hp-api.onrender.com/api/spells", {
      fixture: "spells.json",
    });
    cy.visit("http://localhost:3000/home");
  });

  it("should display a message if no cards properly show", () => {
    cy.intercept("GET", "https://hp-api.onrender.com/api/spells", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/allSpells");
    cy.get("main");
    cy.get("p").should(
      "have.text",
      "Sorry there was a Unexpected end of JSON input. Please try again later"
    );
  });
});
