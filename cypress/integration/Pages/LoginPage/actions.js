export class LoginActions {
  visitOrangeHERWebsite() {
    cy.visit("https://opensource-demo.orangehrmlive.com");
    cy.wait(1000);
  }

  setUserName(userName) {
    cy.get('input[name="username"]').clear().type(userName);
  }

  setPassword(password) {
    cy.get('input[type="password"]').clear().type(password);
  }

  clickLoginButton() {
    cy.get(".orangehrm-login-button").click();
    cy.wait(1000);
  }
}
