/// <reference types="cypress" />
//var faker = require('faker');
import { faker } from '@faker-js/faker';


describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@teste$teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Rosana')
        cy.get('#account_last_name').type('Freitas')
        cy.get('.woocommerce-Button').click()
        
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')



    });

});