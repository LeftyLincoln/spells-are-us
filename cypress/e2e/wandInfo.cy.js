describe("Wand Info", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://hp-api.onrender.com/api/spells", {
      fixture: "spells.json",
    });
    cy.visit("https://spells-are-us.vercel.app/wandInfo");
  });

  it("should show information about wands to the user on a unique url", () => {
    cy.get(".quote").contains(
      "The wand chooses the wizard... it's not always clear why."
    );
    cy.get(".facts > :nth-child(3)").contains("Ollivander & Gregorovitch");
    cy.get(".facts > :nth-child(5)").contains("Unicorn Hair");
    cy.url().should("eq", "https://spells-are-us.vercel.app/wandInfo");
    cy.get(".wand-image-info")
      .should("have.attr", "src")
      .should("include", "wandImage");
  });
});
