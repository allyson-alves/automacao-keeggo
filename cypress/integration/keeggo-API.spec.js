//const sampleForm = require ('../fixtures/sampleForm.json')

const { data } = require("cypress/types/jquery")
const { execPath, hasUncaughtExceptionCaptureCallback } = require("process")

//const API_URL = Cypress.env('API_BASE_URL')
//const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

/// <reference types="Cypress" />

describe('Test API Keeggo', function() {

  it('Listagem de names', function() {
    cy.request({
  
      method: 'GET',
      url: `https://api.trello.com/1/actions/592f11060f95a3d3d46a987a`
    }).should(({body}), function(){

        expect(body).to.equal(200)
        body.items.forEach(item, function(){

        })
    })
})
})