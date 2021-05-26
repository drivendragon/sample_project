import sample from '../fixtures/sample.json'

describe('login verification', () => {
    beforeEach(() => {
        cy.fixture('sample').then(function(sample){
            this.sample = sample;
            cy.visit("http://3.16.37.143/")
            //cy.visit(this.sample.test_link)
   })

    this.sample.forEach(function() {
        it('login scenario' + this.sample.test_scenario.test_name, function() { 
            cy.get(':nth-child(1) > form > [name="email"]').type(this.sample.test_scenario.username)
            cy.get(':nth-child(1) > form > [name="password"]').type(this.sample.test_scenario.password)
            cy.get(':nth-child(1) > form > button').click() //Login button click
            cy.contains(this.sample.test_scenario.verify)
        })
    })
})



//hard coded version of test, where it runs thru one iteration.  The above it trying to run thru more than one test iteration using the fixture object fo each iteration
/*
describe('login verification', () => {
    beforeEach(() => {
        cy.visit("http://3.16.37.143/")
   })

    it('login scenario', function() { 
        cy.get(':nth-child(1) > form > [name="email"]').type('sam@sam.com')
        cy.get(':nth-child(1) > form > [name="password"]').type('samsamsam')
        cy.get(':nth-child(1) > form > button').click() //Login button click
        cy.contains('Welcome')
    })
})
*/