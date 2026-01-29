import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import testData from '../fixtures/testData.json';

const home = new HomePage();
const product = new ProductPage();
const cart = new CartPage();

describe('Cart', () => {
  it('Add products to cart', () => {
    home.launchUrl();
    home.openCategory('phone');
    product.openProductByName(testData.productSample);
    product.addToCartAndAssert();
    product.goToCart();
    cart.assertProductPresent(testData.productSample);
  });
});