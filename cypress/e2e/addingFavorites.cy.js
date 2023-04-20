describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hp-api.onrender.com/api/spells",
      { fixture: "spells.json" }
    )
    cy.visit("http://localhost:3000/home")
  })

  it('should display a message if no favorites are saved', () => {
    cy.visit("http://localhost:3000/favoriteSpells")
    cy.get('.no-fav-message').contains("You haven't saved any spells yet...")
  })
})