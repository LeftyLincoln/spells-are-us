describe('Show All Spells', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hp-api.onrender.com/api/spells",
      { fixture: "spells.json" }
    )
    cy.visit("http://localhost:3000/home")
  })

  it("should change url when you visit allspells", () => {
    cy.url().should('eq', "http://localhost:3000/home")
    cy.get('[href="/allSpells"] > button').click()
    cy.url().should('eq', "http://localhost:3000/allSpells")
  })

  it('should show 5 spells when you click all spells button', () => {
    cy.get('[href="/allSpells"] > button').click()
    cy.get(".spell-card").should("have.length", 5)
    cy.get('.spells-container > :nth-child(1)').contains("Aberto")
    cy.get('.spells-container > :nth-child(1)').contains("Opens locked doors")
    cy.get('.spells-container > :nth-child(5)').contains("Anapneo")
    cy.get('.spells-container > :nth-child(5)').contains("Clears someone's airway")
  })

})
