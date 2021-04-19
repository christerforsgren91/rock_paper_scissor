describe('user can navigate app', () => {
  before(() => {
    cy.visit('./')
  })

  it('displays header', () => {
    cy.get('[data-cy=header]').should('contain', 'WELCOME')
  });

  it('displays text', () => {
    cy.get('[data-cy=text]').should('be.visible')
  });
})