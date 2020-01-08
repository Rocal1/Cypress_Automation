describe("Login test", ()=>{
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include","index.html")
    })

    it("TEST1: Should display login form", function(){
        cy.get("#signin_button").click()
        cy.get("#login_form").should("be.visible")

    })
    it("TEST2: Should forgotten password message", function(){
        cy.contains("Forgot your password ?").click()
        cy.get("#send_password_form").should("be.visible")
        cy.url().should("include", "forgot-password.html")
    })
    it("TEST 3: Should submit forgotten password form", function(){
        cy.get("#user_email").type("email.com")
        cy.contains("Send Password").click()
    })
    it("TEST 4: Shoudl display success message", function() {
        cy.get("h3").contains("Forgotten Password")
        cy.url().should('include', "forgotten-password-send.html")
    })
})