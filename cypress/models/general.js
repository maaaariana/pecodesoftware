
export function getSomeElements(){
    cy.get('#about_us_id').should('exist');
    cy.get('#about_us_id').should('contain.text', 'Turning your ideas into reality');

    cy.get('#services_id').should('exist');
    cy.get('#services_id').should('contain.text', 'Our services')
}
