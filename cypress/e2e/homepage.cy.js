describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://hp-api.onrender.com/api/spells",
      { fixture: "spells.json" }
    )
    cy.visit("https://spells-are-us.vercel.app/home")
  })

  it('should display a title, buttons, and a wand image', () => {
    cy.get("h1").contains("Spells Are Us")
    cy.get('[href="/allSpells"] > button').contains("All Spells")
    cy.get('[href="/favoriteSpells"] > button').contains("Favorite Spells")
    cy.get('[href="/wandInfo"] > button').contains("Wand Info Bonus")
    cy.get("h2").contains("Welcome Muggle, Enter Below")
    cy.get('.wand-image').should('have.attr', 'src').should('include','wandImage')
  })
})