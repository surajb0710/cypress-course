describe('Forms Test', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('Test Subscription Form', () => {
    cy.contains('Testing Forms');
    cy.getDataTest('subscribe-confirmation-message').should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.getDataTest('subscribe-confirmation-message')
      .should('be.visible')
      .should('contain.text', 'fail!');

    // cy.getDataTest('subscribe-form').find('input').type('abc@gmail.com');

    cy.getDataTest('subscribe-form').find('input').as('subscribe-input'); // Creating alias
    cy.get('@subscribe-input').type('abc@gmail.com');
    cy.getDataTest('subscribe-button').click();
    cy.getDataTest('subscribe-confirmation-message')
      .should('be.visible')
      .should('contain.text', 'Successfully subbed: abc@gmail.com');
    cy.wait(3000);

    cy.getDataTest('subscribe-form').find('input').as('subscribe-input'); // Creating alias
    cy.get('@subscribe-input').type('abc@gmail.io');
    cy.getDataTest('subscribe-button').click();
    cy.getDataTest('subscribe-confirmation-message')
      .should('be.visible')
      .should('contain.text', 'Invalid email: abc@gmail.io');
  });
});
