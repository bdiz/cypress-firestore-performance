describe('Adding document to firestore', () => {
  it('Visits the app and sends a document add request', () => {
    cy.visit('/');

    cy.get("[data-test=add-doc-button]")
      .click();

    cy.get("[data-test=timer]")
      .should("be.lessThan", 2.0);
  })
})
