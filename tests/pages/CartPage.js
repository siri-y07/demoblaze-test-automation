export default class CartPage {
  //  Locators
  tableRows = '.success';
  placeOrderBtn = 'button[data-target="#orderModal"]';

  assertProductPresent(name) {
    cy.get(this.tableRows).should('contain.text', name);
  }
}
