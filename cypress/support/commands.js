Cypress.Commands.add('clearAndType', (selector, value) =>{
  cy.get(selector).clear().type(value);
});

Cypress.Commands.add('waitUntilVisible', (selector, timeout = 10000) =>{
  cy.get(selector, { timeout }).should('be.visible');
});

Cypress.Commands.add('fillLoginCredentials', (username, password, selectors) =>{
  const { usernameInput, passwordInput } = selectors;

  cy.get(usernameInput).clear().type(username, { delay: 0 });
  cy.get(passwordInput).clear().type(password, { delay: 0 });

});
