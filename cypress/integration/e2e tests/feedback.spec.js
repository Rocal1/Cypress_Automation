describe("Feedback test", ()=>{
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include","index.html")
    })

    it("TEST1: Should display feedback form", function(){
        cy.get("#feedback").as("LinkFeedback")

        cy.get("@LinkFeedback").click()
        cy.get("#feedback-title").should("be.visible")
        cy.get("form").should("be.visible")
    })

    it("TEST2: Should submit feedback form", function(){
        cy.get("#name").as("Input_Name")
        cy.get("#email").as("Input_Email")
        cy.get("#subject").as("Input_Subject")
        cy.get("#comment").as("Input_Comment")
        cy.get(".btn-signin").as("Submit_Button")


        cy.get("@Input_Name").type("Rodrigo")
        cy.get("@Input_Email").type("Rodrigo@lemonbrew.com")
        cy.get("@Input_Subject").type("Rod")
        cy.get("@Input_Comment").type("Comentariooooo")
        cy.get("@Submit_Button").click()
    })

    it("TEST 3: Should display success message", function(){
        cy.get("#feedback-title").should("be.visible")
    })
})