export class AdminActions {
  clickAddButton = () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
  };

  clickSeachButton = () => {
    cy.get(".orangehrm-left-space").click();
  };

  clickDeleteSelectedButton = () => {
    cy.get(". oxd-button--label-danger ").click();
  };

  clickConformDeleteButton = () => {
    cy.get(".oxd-button--label-danger orangehrm-button-margin").click();
  };

  clickEditButton = () => {
    cy.get(".oxd-table-cell-actions > :nth-child(2) > .oxd-icon").click();
  };

  clickCancelDeleteButton = () => {
    cy.get(".oxd-button--text orangehrm-button-margin").click();
  };
}
