//<reference types="Cypress" />

describe('Página de Login', function() {
     beforeEach(function(){ //Antes de cada Teste, faça a visita a URL
        cy.visit('./codigo_fonte/index.html')
    })

    it('Verifica o Título da página', function(){
        cy.title().should('be.equal', 'Página de Login') 
    })

    it('Valida Preenchar os campos de Usuário e Senha com dados válidos', function(){
        
        cy.get('#usuario').type('amands@gmail.com')
        cy.get('#password').type('123456')

        cy.get('.btn-login').click()
        //cy.contains('btn-login','Login').click()
        cy.get('#autenticado').should('be.visible')
    })

    it('Valida não preencher os campos Usuário e Senha', function(){ //Vou verificar futuramente

        //cy.get('#usuario').type(' ') - Não adicionar informações no campos
        //cy.get('#password').type(' ') - Não adicionar informações no campos

        cy.get('.btn-login').click()
        //.should('have.value', '')

        cy.get('#error').should('be.visible')

    })

    it.only('Valida preencher o campo E-mail inválido', function(){
        cy.get('#usuario').type('amands.gmail.com')
        cy.get('.btn-login').click()
        cy.get('#error_email').should('be.visible')
    })

    it('Valida preecher o campo Senha com senha inválida', function(){
        cy.get('#usuario').type('amands@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.btn-login').click()
        cy.get('#senha_invalida').should('be.visible')
    })

    it('Valida não preencher o campo E-mail', function(){
        cy.get('#password').type('123456')
        cy.get('.btn-login').click()
        cy.get('#error_email').should('be.visible')
    })

    it('Valida não preencher o campo Senha', function(){
        cy.get('#usuario').type('amands@gmail.com')
        cy.get('.btn-login').click()
        cy.get('#error_senha').should('be.visible')
    })

})
