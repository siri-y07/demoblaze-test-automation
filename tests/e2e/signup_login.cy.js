import HomePage from '../pages/HomePage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import testData from '../fixtures/testData.json';

const home = new HomePage();
const signup = new SignupPage();
const login = new LoginPage();

describe('Signup → Logout → Login → Logout (chained, consistent)', () => {
  it('Sign up a new user,logout, login with same user, logout', () => {
    const ts = Date.now();
    const username = `${testData.user.prefix}${ts}`;
    const password = `${testData.user.passwordPrefix}${ts}${testData.user.passwordSuffix}`;

    home.launchUrl();

    // Signup
    signup.clickSignup();
    signup.fill(username, password);
    signup.submitAndAssert();

    // Login
    login.clickLogin();
    login.login(username, password);
    login.verifyLoggedIn(username);

    // Logout
    login.logout();
  });
});
