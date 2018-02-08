describe('The Home Page', function() {
	it('successfully loads', function() {
		cy.visit('/');

		cy.get('input').type(`marcelmichau{enter}`);
	});
});
