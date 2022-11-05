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

        //cy.get('.T-shirts').click()
        cy.get('#search_query_top').type('Faded Short Sleeve T-shirts').should('have.value', 'Faded Short Sleeve T-shirts')
        cy.get('#searchbox > .btn').click()

        cy.get('.product_img_link > .replace-2x').click()
        cy.tick(5000)

        //cy.contains('buttom', 'Add to cart').trigger('mouserover')
    })
})