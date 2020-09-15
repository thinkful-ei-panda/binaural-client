/// <reference types="Cypress" />

/**
 * @abstract: Know the name and the purpose of app
 *
 * @criteria
  As first time visiting user to the binaural site:
  - I see the name of the app, and the best way to use it.
*/
describe(`User story: Application name and purpose`, function() {
  it('has h1 with title', () => {
    cy.visit('/')
    cy.get('header h1')
      .should('contain', 'Link', 'Binaural')
      .get('p')
      .should(
        'have.text',
        'Best experienced through headphones.'
      )
  })
})
