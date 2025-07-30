describe('API de Tarefas - Testes E2E com Cypress', () => {
  const API = 'http://localhost:5000/api/tasks';

  it('Deve criar uma nova tarefa', () => {
    cy.request('POST', API, { text: 'Nova tarefa Cypress' })
      .its('status')
      .should('equal', 201);
  });

  it('Deve listar todas as tarefas', () => {
    cy.request(API)
      .its('status')
      .should('equal', 200);
  });

  it('Deve excluir uma tarefa recém-criada', () => {
    cy.request('POST', API, { text: 'Tarefa para deletar' })
      .then((response) => {
        const id = response.body.id;
        cy.request('DELETE', `${API}/${id}`)
          .its('status')
          .should('equal', 204);
      });
  });
});