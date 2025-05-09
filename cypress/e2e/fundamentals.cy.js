describe('Fundamentals Test', () => {
  beforeEach(() => {
    cy.visit('/fundamentals');
  });

  it('contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    );
  });

  it('Accordian works correctly', () => {
    cy.contains('Your tests will exist in a describe block.').should(
      'not.be.visible'
    );
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block.').should(
      'be.visible'
    );
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click();
    cy.contains('Your tests will exist in a describe block.').should(
      'not.be.visible'
    );
  });
});
