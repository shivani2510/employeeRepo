/// <reference types="cypress" />
describe('Dashboard',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:4200/dashboard');
    });

    it('should apply filter',()=>{
        cy.get('#ag-input-id-59').type('shivani');
    });

    it('should redirect to manage page',()=>{
        cy.get('button').contains('Add Athlete').click();
        cy.url().should('include','manage');
    });
});

describe('Manage Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/manage');
    });

     it('should not allow form to submit if error', () => {
         cy.get('#name').type('Shivani');
         cy.get('#age').type('0')
         cy.contains('Submit').click();
     });

    it('should allow form to submit only if no error', () => {
        cy.get('#name').type('Shivani');
        cy.get('#age').type('2020');
        cy.get('#email').type('shivani.gajjar@gmail.com');
        cy.get('mat-select[formControlName=country]').click().get('mat-option').contains('India').click();

        cy.get('#year').type('2020');
        // cy.get('#date').type('03/06/2020');
        // .mat-calendar-table .mat-calendar-body > .mat-calendar-body-cell .mat-calendar-body-cell-content
        cy.get('mat-datepicker-toggle[id=picker]').click().get(".mat-calendar-body-active").click();
        cy.get('mat-select[formControlName=sport]').click().get('mat-option').contains('Swimming').click();
        cy.get('#gold').type('3');
        // cy.get('#sport').select('Swimming')
        cy.get('button[type="submit"]').click();
        // cy.get('form').submit();
        // cy.contains('Form Submitted').should('be.visible');
        // cy.url().should('include','dashboard');
    });

    it('should redirect to dashboard when click on cancel',()=>{
        cy.get('button').contains('Cancel').click();
        cy.url().should('include','dashboard');
    });
});