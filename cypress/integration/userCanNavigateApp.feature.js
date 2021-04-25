describe('user can navigate app', () => {
  before(() => {
    cy.visit('./')
  })

  it('displays header', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock Paper Scissor')
  });

  it('displays score', () => {
    cy.get('[data-cy=score]').should('be.visible')
  });

  it('displays footer', () => {
    cy.get('[data-cy=footer]').should('contain', 'Made With React')
  });
})