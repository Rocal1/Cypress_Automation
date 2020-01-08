describe("Action test", () => {
    before(function(){
    //RUN ONCE BEFORE ALL TESTS IN THE BLOCK
    })
    after(function(){
    //RUN ONCE AFTER ALL TESTS IN THE BLOCK
    })
    beforeEach(function(){
    //RUN BEFORE EACH TEST IN THE BLOCK
    cy.visit("http://devexpress.github.io/testcafe/example/")
    })
    afterEach(function(){
    //RUN AFTER EACH TEST IN THE BLOCK
    })

    it("TEST 1: Submit developer name", function(){
        // cy.get("#developer-name").type("Name")
        // cy.get("#submit-button").scrollIntoView()
        // cy.get("#submit-button").click()
        cy.submitDeveloper("Test")

        cy.get(".result-content").should("be.visible")
        cy.url().should("include", "thank-you")
    })

    it("TEST 2: should enable slider", function(){
        cy.get("#slider").as("Slider")
        cy.get("@Slider").should("have.class", "ui-state-disabled")
        cy.get("#tried-test-cafe").click()
        cy.get("@Slider").should("not.have.class", "ui-state-disabled")
    })
    
    it("TEST 3: Should have empty value by default", function(){
        cy.get("#comments").as("textarea")

        cy.get("#tried-test-cafe").click()
        //cy.get("@textarea").should("be.empty")
        cy.get("@textarea").should("have.value", "")
        cy.get("@textarea").type("New value")
        cy.get("@textarea").should("have.value", "New value")
    })
})