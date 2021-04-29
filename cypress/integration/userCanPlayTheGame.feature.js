describe('visitor can play the game', () => {
beforeEach(() => {
  cy.visit('/',{
    onBeforeLoad(window) {
      cy.stub(window.Math, 'random').returns(0)
    }
  })
})

  it('visitor pick paper and win over rock', () => {
    cy.get('[data-cy="paper-button"]').click()
    cy.get('[data-cy="player-score"]').should('contain', 1)
  });

  it('visitor pick scissor and lose over rock', () => {
    cy.get('[data-cy="scissor-button"]').click()
    cy.get('[data-cy="computer-score"]').should('contain', 1)
  });

  it('visitor pick rock and computer pick rock', () => {
    cy.get('[data-cy="rock-button"]').click()
    cy.get('[data-cy="tie"]').should('contain', "Its a tie, go again")
  });

  it('visitor can restart the game', () => {
    cy.get('[data-cy="restart-button"]').click()
    cy.get('[data-cy="player-score"]').should('contain', 0)
    cy.get('[data-cy="computer-score"]').should('contain', 0)
  });
})
