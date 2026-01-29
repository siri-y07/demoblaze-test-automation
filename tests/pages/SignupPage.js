export default class SignupPage {
  //  Locators
  signupBtn = '#signin2';
  modal = '#signInModal';
  username = '#sign-username';
  password = '#sign-password';
  submitBtn = 'button[onclick="register()"]';

  clickSignup() { cy.get(this.signupBtn).should('be.visible').click(); }
  fill(username, password) {
     cy.waitUntilVisible(`${this.modal}.show`);
    cy.fillLoginCredentials(username, password, {
      usernameInput: this.username,
      passwordInput: this.password
    });
  }
  
  submitAndAssert() {
    cy.intercept('POST', '**/signup').as('signupApi');
    cy.get(this.submitBtn).click();
    cy.wait('@signupApi');
    cy.on('window:alert', (txt) => {
      expect(txt).to.include('Sign up');
    });
  }
}
