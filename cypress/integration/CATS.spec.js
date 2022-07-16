//<reference types="Cypress" />

describe('Página de Login', function() {
     beforeEach(function(){ //Antes de cada Teste, faça a visita a URL
        cy.visit('./codigo_fonte/index.html')
    })

    it('Verifica o Título da página', function(){
        cy.title().should('be.equal', 'Página de Login') 
    })


})
