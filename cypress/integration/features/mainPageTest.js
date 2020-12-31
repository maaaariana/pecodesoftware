const { getSomeElements } = require("../../models/general");

describe('Should assert some elements on the main page', function () {
	let envVariables = Cypress.env(Cypress.env('environment'));

	before(() => {
		cy.visit(envVariables.url);
		cy.url().should('include', envVariables.url);
	});

	it('Should verify greeting page', () => {
		getSomeElements();
	});
});