describe('user can navigate app', () => {
  before(() => {
    cy.visit('./')
  })

  it('displays header', () => {
    cy.get('[data-cy="header"]').should('contain', 'Rock Paper Scissor')
  });

  it('displays text', () => {
    cy.get('[data-cy="lucky-text"]').should('contain', 'Is it your lucky day?')
  });

  it('displays footer', () => {
    cy.get('[data-cy="footer"]').should('contain', 'Made With React')
  });

  it('displays restart, rock, paper and scissor button', () => {
    cy.get('[data-cy="rock-button"]').should('exist')
    cy.get('[data-cy="paper-button"]').should('exist')
    cy.get('[data-cy="scissor-button"]').should('exist')
    cy.get('[data-cy="restart-button"]').should('exist')
  });

  it('displays score', () => {
    cy.get('[data-cy="player-score"]').should('contain', 'Player score')
    cy.get('[data-cy="computer-score"]').should('contain', 'Computer score')
  });

  it('displays tie if player and computer pick the same', () => {
    cy.get('[data-cy="tie"]').should('contain', "Its a tie, go again")
  });
})