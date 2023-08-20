


Cypress.Commands.add('login', () => {

    const baseUrl = Cypress.config('baseUrl'); // Obtém a URL base do arquivo de configuração

    // Acessa a URL de login
    cy.visit(`${baseUrl}/login`);
  
    // Verifica se o botão Login está desabilitado
    cy.get('button.LoaderButton')
      .should('be.disabled');
  
    // Preenche os campos de email e senha
    cy.get('input#email').type(Cypress.env('email'), { log: false })
    cy.get('input#password').type(Cypress.env('password'), { log: false });
  
    // Verifica se o botão Login agora está habilitado
    cy.get('button.LoaderButton')
      .should('not.be.disabled');
  
    // Clica no botão de login
    cy.get('button.LoaderButton').click();

    
});

Cypress.Commands.add('noteAdd', (phrase) => {
  
    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
    cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');
  
    // Clica em "Create a new note"
    cy.contains('.list-group-item h4', 'Create a new note').click();
  
    // Preenche o campo de conteúdo com texto aleatório do fakerjs
    
    cy.get('textarea#content').type(phrase);
  
    // Clica em "Create"
    cy.get('button.LoaderButton').should('not.be.disabled').click();

  });


  Cypress.Commands.add('createButtonValidate', () => {

    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
    cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');
  
    // Clica em "Create a new note"
    cy.contains('.list-group-item h4', 'Create a new note').click();

    // Verifica se o botão Create está desabilitado
    cy.get('button.LoaderButton')
      .should('be.disabled')
      .should('have.text', 'Create');

  });

  Cypress.Commands.add('noteUpdate', (rephrase) => {

    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
    cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');
  
    // Pega todos os elementos com a classe "list-group-item" e verifica se há pelo menos 2
    cy.get('.list-group-item').should('have.length.gte', 2);
  
    // Clica no segundo elemento com a classe "list-group-item"
    cy.get('.list-group-item').eq(1).click();
  
    // Clica no textarea e limpa o conteúdo
    cy.get('textarea#content').clear().type(rephrase);
  
    // Clica no botão "Save"
    cy.get('button.LoaderButton[type="submit"]').click();

  });
  


  Cypress.Commands.add('noteDelete', () => {

    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
   cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');

    // Pega todos os elementos com a classe "list-group-item" e verifica se há pelo menos 2
    cy.get('.list-group-item').should('have.length.gte', 2);
  
    // Clica no segundo elemento com a classe "list-group-item"
    cy.get('.list-group-item').eq(1).click();
  
    // Clica no botão "Delete"
    cy.get('button.LoaderButton[type="button"]').click();  
    

  });


 /* Cypress.Commands.add('noteDeleteCancel', () => {

    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
    cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');

    // Pega todos os elementos com a classe "list-group-item" e verifica se há pelo menos 2
    cy.get('.list-group-item').should('have.length.gte', 2);
  
    // Clica no segundo elemento com a classe "list-group-item"
    cy.get('.list-group-item').eq(1).click();
  
    // Clica no botão "Delete"
    cy.get('button.LoaderButton[type="button"]').click();
  
    // Clica no botão "Cancelar" no diálogo de confirmação
    cy.contains('Cancelar').click();

     // Verifica se existe "Your Notes"
     cy.contains('.page-header h1', 'Your Notes').should('be.visible');

    // Aguarda até 15 segundos para o elemento aparecer, mas continua imediatamente se ele aparecer antes
    cy.get('.page-header h1', { timeout: 15000 }).should('be.visible');

  });*/
  