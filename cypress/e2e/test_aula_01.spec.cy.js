//import * as faker from '@faker-js/faker';
import { faker } from '@faker-js/faker';

describe('Mentoria Walmyr Aula 01 - Login', () => {

  

  beforeEach(() => {

    cy.login(); 

  });

  it('Deve adicionar uma nova nota com conteúdo aleatório', () => {

    const randomContent = faker.lorem.paragraph()
    cy.noteAdd(randomContent);

  });

  it('Deve validar se o botão Create da pagina Create a New Note está desabilitado, se não foi preenchido nada no form', () => {

    cy.createButtonValidate(); 

    
  });


  it('Atualizar a note', () => {

    const randomContent2 = faker.lorem.paragraph();
    cy.noteUpdate(randomContent2); 

    
  });

  it.only('Deve deletar a note', () => {
    
    cy.noteDelete(); 
    
  });


/*  it('Deve cancelar a solicitação de deletar uma note', () => {
    
    cy.noteDeleteCancel(); 
    
  });
*/
  

});