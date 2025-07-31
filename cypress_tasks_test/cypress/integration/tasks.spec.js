describe('API de Tarefas - Testes E2E com Cypress', () => {
  const API = 'http://localhost:5000/api/tasks';

  it('Cria uma nova tarefa', () => {
    cy.request('POST', API, { text: 'Nova tarefa Cypress' })
      .its('status')
      .should('equal', 201);
  });

  it('Lista todas as tarefas', () => {
    cy.request(API)
      .its('status')
      .should('equal', 200);
  });

  it('Exclui uma tarefa recém-criada', () => {
    cy.request('POST', API, { text: 'Tarefa para deletar' })
      .then((response) => {
        const id = response.body.id;
        cy.request('DELETE', `${API}/${id}`)
          .its('status')
          .should('equal', 204);
      });
  });
});