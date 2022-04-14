it('ルートパスに訪問できること', () => {
  cy.visit('/')
})

it('ページタイトルが表示されていること', () => {
  cy.get('title').should('have.text', 'Create Next App')
})
