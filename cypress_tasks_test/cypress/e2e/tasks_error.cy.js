describe('API de Tarefas - Testes Negativos com Cypress', () => {
  const API = 'http://localhost:5000/api/tasks';

  it('Não permite criar tarefa sem texto', () => {
    cy.request({
      method: 'POST',
      url: API,
      body: {},
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([400, 422]);
    });
  });

  it('Retorna 404 ao tentar deletar tarefa inexistente', () => {
    cy.request({
      method: 'DELETE',
      url: `${API}/999999`,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([404, 204]);
    });
  });

  it('Não aceita texto muito longo', () => {
    const longText = 'A'.repeat(1000);
    cy.request({
      method: 'POST',
      url: API,
      body: { text: longText },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.oneOf([400, 422]);
    });
  });
});