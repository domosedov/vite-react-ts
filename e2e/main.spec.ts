/// <reference types="cypress" />
describe('Main', () => {
  it('should display header text', () => {
    cy.visit('/')
    cy.contains('h2', 'Count')
  })
})
