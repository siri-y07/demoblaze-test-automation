export default class LoginPage {
  //  Locators
  loginBtn = '#login2';
  modal = '#logInModal';
  username = '#loginusername';
  password = '#loginpassword';
  submitBtn = 'button[onclick="logIn()"]';
  nameOfUser = '#nameofuser';
  logoutBtn = '#logout2';

  clickLogin() { cy.get(this.loginBtn).should('be.visible').click(); }
  login(username, password) {
    cy.waitUntilVisible(`${this.modal}.show`);
    cy.fillLoginCredentials(username, password, {
      usernameInput: this.username,
      passwordInput: this.password
    });
     cy.intercept('POST', '**/login').as('loginApi');
     cy.get(this.submitBtn).click();
    cy.wait('@loginApi');
  }
  verifyLoggedIn(expectedUser) {
    cy.waitUntilVisible(this.nameOfUser, 20000);
    cy.get(this.nameOfUser).should('be.visible').invoke('text').should('include', expectedUser);
  }
  logout() {
    cy.get(this.logoutBtn).should('be.visible').click({ force: true });
    cy.get(this.loginBtn).should('be.visible');
  }
}
