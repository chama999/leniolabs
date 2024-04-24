import {loginElements} from '../pages/login.page'
import {dashboardElements} from '../pages/dashboard.page'


describe('Example test feature', ()=>{
    before('beforeAll hook', ()=> {
        cy.log('This is printed by the beforeAll hook')
        cy.visit('/')
        cy.url().should('contain','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it('first step', ()=> {
        cy.log('This is printed by first step')
        cy.get(loginElements.userInput).type(loginElements.user)
        cy.get(loginElements.passwordInput).type(loginElements.password)
        cy.get(loginElements.loginButton).click()
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get(dashboardElements.userNameLabel).should('be.visible').should('have.text','Sven Carlsen')
    })
    after('afterAll Hook', ()=> {
        cy.log('This is printed by the afterAll hook')
    })
})