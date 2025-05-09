describe('Various Examples', () => {
  before(() => {
    cy.visit('/examples');
  });

  it('Multi Page Testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location('pathname').should('equal', '/');

    cy.getDataTest('nav-fundamentals').click();
    cy.location('pathname').should('equal', '/fundamentals');

    cy.getDataTest('nav-overview').click();
    cy.location('pathname').should('equal', '/overview');
  });

  it('intercept', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      //   body: {
      //     message: 'Successfully intercepted the request',
      //   },
      fixture: 'example.json',
    });

    // cy.getDataTest('post-button').click();
  });

  it.only('grudes', () => {
    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('Grudge 1');
    });
    cy.getDataTest('add-grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1);
    });

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('Grudge 2');
    });
    cy.getDataTest('add-grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2);
    });

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('Grudge 3');
    });
    cy.getDataTest('add-grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 3);
    });

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li')
        .its(0)
        .within(() => {
          cy.get('button').click();
        });
    });

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2);
    });

    cy.getDataTest('clear-grudge-button').click();

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('not.exist');
    });
  });
});
