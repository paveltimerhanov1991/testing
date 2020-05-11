import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
 
Given('I am in the admin login page',()=>{
 
    cy.visit("http://5.189.162.28:3140/");
 
})
 
When('I enter valid credentials',()=>{
 
    cy.get('#inputEmail').type("Pavel.T");
    cy.get('#inputPassword').type("pavel1234");
    cy.get('#inputSubmit').click();  
})
 
Then('I should be able to login successfully',()=>{
 
    cy.contains('Dashboard')
 
})