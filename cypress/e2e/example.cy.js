describe('Example test feature', ()=>{
    before('beforeAll hook', ()=> {
        cy.log('This is printed by the beforeAll hook')
    })
    it('first step', ()=> {
        cy.log('This is printed by first step')
        cy.visit('https://www.google.com')
        cy.url().should('contain','www.google.com')
    })
    before('second step', ()=> {
        cy.log('This is printed by the second step')
        cy.visit('https://www.google.com/search?q=leniolabs')
        cy.url().should('include','leniolabs')
    })
    after('afterAll Hook', ()=> {
        cy.log('This is printed by the afterAll hook')
    })
})