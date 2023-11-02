export class EditUserActions {
  clickSaveButton = () => {
    cy.get(".oxd-button--secondary").click();
  };

  clickCancelButton = () => {
    cy.get(".oxd-button--ghost").click();
  };

  editUserName = (newName) => {
    cy.get(":nth-child(2) > .oxd-input").clear().type(newName);
  };
}
