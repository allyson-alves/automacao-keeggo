/// <reference types="Cypress" />

describe('Teste de Automação Keeggo', function() {       
    beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php')

    })

    it.only('Realizar login na aplicação', function(){
        cy.get('.login').should('be.visible').click().should('be.visible')
        cy.get('#email').type("teste2021@teste.com.br").should('be.visible')
        cy.get('#passwd').type("teste").should('be.visible')
        cy.contains('button', 'Sign in').click()
    })
})