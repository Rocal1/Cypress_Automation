1describe("Navbar test", ()=>{
    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.url().should("include","index.html")
    })

    it("TEST 1: Should display online banking content", function(){
        cy.get("#onlineBankingMenu").as("LinkBankingMenu")

        cy.get("@LinkBankingMenu").click()

        //cy.get("h1").as("Title")
        cy.xpath('//h1').as("Title")
        cy.get("@Title").contains("Online Banking")
        cy.get('#online_banking_features').should("be.visible")
    })

    it("TEST 3: Should display feedback content", function() {
        cy.get("#feedback").as("LinkFeedback")
        cy.get('@LinkFeedback').click()
        cy.get("#feedback-title").should("be.visible") 
    })

    it('TEST 4: Should navigate to homepage via logo',function(){
        cy.get(".brand").click()
        cy.url().should("include", "index.html")
    })
})