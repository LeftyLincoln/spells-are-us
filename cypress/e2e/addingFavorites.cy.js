describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hp-api.onrender.com/api/spells",
      { fixture: "spells.json" }
    )
    cy.visit("https://spells-are-us.vercel.app/home")
  })

  it('should display a message if no favorites are saved', () => {
    cy.visit("https://spells-are-us.vercel.app/favoriteSpells")
    cy.get('.no-fav-message').contains("You haven't saved any spells yet...")
  })

  it('should allow the user to save favorite spells and delete spells', () => {
    cy.get('[href="/allSpells"] > button').click()
    cy.get(':nth-child(1) > .spell-button').click()
    cy.get(':nth-child(5) > .spell-button').click()
    cy.get('[href="/favoriteSpells"] > button').click()
    cy.get(".favorite-card").should("have.length", 2)
    cy.get(".favorite-card").last().contains("Anapneo")
    cy.get(':nth-child(1) > .favorite-button').click()
    cy.get(".favorite-card").should("have.length", 1)
  })
})