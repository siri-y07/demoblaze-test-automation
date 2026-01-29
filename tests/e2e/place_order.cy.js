import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import testData from '../fixtures/testData.json';

const home = new HomePage();
const product = new ProductPage();
const order = new PlaceOrderPage();

describe('Place Order', () => {
  it('Complete end to end purchase flow', () => {
    home.launchUrl();
    home.openCategory('phone');
    product.openProductByName(testData.productSample);
    product.addToCartAndAssert();
    product.goToCart();
    order.open();
    order.fillAndPurchase(testData.checkout);
  });
});
