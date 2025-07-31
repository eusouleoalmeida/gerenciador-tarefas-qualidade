describe('API de Tarefas - Testes Positivos com Cypress', () => {
  const API = 'http://localhost:5000/api/tasks';

  it('Cria uma nova tarefa', () => {
    const novaTarefa = 'Tarefa Teste Cypress';

    cy.request('POST', API, { text: novaTarefa }).then((response) => {
      console.log('✅ Tarefa criada:', response.body);
      expect(response.status).to.eq(201);
      expect(response.body.text).to.eq(novaTarefa);
    });
  });

  it('Lista as tarefas existentes', () => {
    cy.request('GET', API).then((response) => {
      console.log('📋 Lista de tarefas retornadas:', response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('Exclui uma tarefa existente', () => {
    const tarefa = 'Tarefa temporária para exclusão';

    cy.request('POST', API, { text: tarefa }).then((resPost) => {
      const tarefaCriada = resPost.body;
      console.log('🗑️ Criando tarefa para deletar:', tarefaCriada);

      cy.request('DELETE', `${API}/${tarefaCriada.id}`).then((resDel) => {
        console.log('✅ Tarefa excluída com sucesso');
        expect(resDel.status).to.eq(204);
      });
    });
  });
});
