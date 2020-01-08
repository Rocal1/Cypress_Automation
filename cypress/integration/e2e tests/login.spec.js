describe("Login test", ()=>{
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include","index.html")
    })

    it("TEST 1: Should display login form", function(){
        cy.get("#signin_button").click()
        cy.get("#login_form").should('be.visible')
    })
    
    it("TEST 2: Should login to application", function(){
        // cy.get("#user_login").type("name")
        // cy.get('#user_password').type('password')
        // cy.contains('Sign in').click()
        cy.loginToApp("Rodrigo", "123456")
    })

    it("TEST 3: Should display error message", function(){
        cy.get(".alert-error").as("Error")
        cy.get('@Error').should('be.visible')
    })

})