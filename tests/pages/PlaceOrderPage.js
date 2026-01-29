 export default class PlaceOrderPage {
  //  Locators
  modal = '#orderModal';
  fields = {
    name: '#name',
    country: '#country',
    city: '#city',
    card: '#card',
    month: '#month',
    year: '#year',
  };
  purchaseBtn = 'button[onclick="purchaseOrder()"]';
  okBtn = '.sweet-alert .confirm';

  open() {
    cy.get('button[data-target="#orderModal"]').click();
    cy.waitUntilVisible(`${this.modal}.show`);
  }

  fillAndPurchase(data) {
   cy.clearAndType(this.fields.name, data.name);
   cy.clearAndType(this.fields.country, data.country);
   cy.clearAndType(this.fields.city, data.city);
   cy.clearAndType(this.fields.card, data.card);
   cy.clearAndType(this.fields.month, data.month);
   cy.clearAndType(this.fields.year, data.year);
    cy.intercept('POST', '**/deletecart').as('deleteCartApi');
    cy.get(this.purchaseBtn).click();
    cy.get('.sweet-alert').should('be.visible').within(() => {
      cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
      cy.contains('p', 'Id:').should('exist');
      cy.contains('p', 'Amount:').should('exist');
    });
    cy.get(this.okBtn).click();
    cy.wait('@deleteCartApi');
  }
}
