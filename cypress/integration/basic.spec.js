describe("my first cypress test", ()=>{
   
    it("TEST 1: should load example webpage", function(){
        cy.visit("/")

        cy.url().should("include", "example.com/")
        cy.title().should("equal", "Example Domain")
        //cy.get("h1").contains("Example Domain")
        
        //WAIT 3mil segundos ---> cy.wait(3000)
        //PAUSA (dar Play para continuar) --> cy.pause()

        //Nombrar un elemento para reutilizar
        cy.get("h1").as("title")
        cy.get("@title").contains("Example Domain")
        cy.get("@title").should("be.visible")
    })

    it("TEST 2: should load another superdomain", function(){
    cy.visit("http://www.dev.to")
    })
})