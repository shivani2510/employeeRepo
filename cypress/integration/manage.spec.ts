/// <reference types="cypress" />
context('Manage Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/manage');
    });

    /*  it('should not allow form to submit if error', () => {
         cy.get('#name').type('Shivani');
         cy.get('#age').type('0')
         cy.contains('Submit').click();
     }); */

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

        // cy.get('#sport').select('Swimming')
        cy.contains('Submit').click();
        cy.url().should('include','dashboard');
    });
});