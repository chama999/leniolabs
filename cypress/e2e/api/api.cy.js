describe('Example test feature', ()=>{
    before('beforeAll hook', ()=> {
        cy.log('This is printed by the beforeAll hook')
    })
    it('first step GET', ()=> {
        cy.log('This is printed by first step')
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects',
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).not.be.null
        })
    })
    before('second step POST', ()=> {
        cy.log('This is printed by the second step')
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body).not.be.null
        })
    })
    after('afterAll Hook', ()=> {
        cy.log('This is printed by the afterAll hook')
    })
})