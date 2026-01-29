import HomePage from '../pages/HomePage';
import testData from '../fixtures/testData.json';

const home = new HomePage();

describe('Categories', () => {
  it('Navigate through categories section', () => {
    home.launchUrl();
    testData.categories.forEach(cat => {
      home.openCategory(cat);
      cy.get(home.cards).should('have.length.greaterThan', 0);
    });
  });
});
