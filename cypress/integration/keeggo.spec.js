/// <reference types="Cypress" />

describe('Teste de Automação Keeggo', function() {       
    beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php')

    })

    it.only('Login, Busca de produto, Inclusão no carrinho, Validação de carrinho', function(){
        cy.get('.login').should('be.visible').click().should('be.visible')
        cy.get('#email').type("teste2021@teste.com.br").should('be.visible')
        cy.get('#passwd').type("teste").should('be.visible')
        cy.contains('button', 'Sign in').click()

        cy.get('#search_query_top').type('Faded Short Sleeve T-shirts').should('have.value', 'Faded Short Sleeve T-shirts')
        cy.get('.ac_even').click()
        
        cy.contains('button', 'Add to cart').dblclick().should('be.visible')       
        

        cy.get('#search_query_top').type('Blouse').should('have.value', 'Blouse')
        cy.get('.ac_even').click()
        
        cy.contains('button', 'Add to cart').dblclick().should('be.visible')

        cy.clock()
        cy.get('[title="View my shopping cart"]').click().should('be.visible')
        cy.get('.cart_navigation > .button > span').click().should('be.visible')
        cy.get('.cart_navigation > .button > span').click().should('be.visible')
        cy.get('#cgv').click().should('not.be.visible')
        cy.tick(3500)
        cy.get('.cart_navigation > .button > span').click().should('be.visible')

    })
})