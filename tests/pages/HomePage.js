export default class HomePage {
  //  Locators
  categories = {
    phone: '[onclick="byCat(\'phone\')"]',
    notebook: '[onclick="byCat(\'notebook\')"]',
    monitor: '[onclick="byCat(\'monitor\')"]',
  };
  nav = {
    signup: '#signin2',
    login: '#login2',
    logout: '#logout2',
    nameOfUser: '#nameofuser'
  };
  cards = '.card';

  launchUrl() { cy.visit('/'); }

  openCategory(name) {
    cy.get(this.categories[name]).click(); 
    cy.get(this.cards).should('exist');
  }
}
