export default class ProductPage {
  //  Locators
  productLink = '.hrefch';
  addToCartBtn = 'a[onclick^="addToCart"]';
  cartLink = '#cartur';

  openProductByName(name) {
    cy.contains(this.productLink, new RegExp(`^${name}$`, 'i')).click();
    cy.get(this.addToCartBtn).should('be.visible');
  }
  addToCartAndAssert() {
    cy.intercept('POST', '**/addtocart').as('addToCartApi');
    cy.get(this.addToCartBtn).click();
    cy.wait('@addToCartApi');
    cy.on('window:alert', (txt) => {
      expect(txt.toLowerCase()).to.include('added');
    });
  }
  goToCart() { cy.get(this.cartLink).click(); }
}
