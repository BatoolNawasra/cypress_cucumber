export class AddUserActions {

  enteringUserRoleESS = () => {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{enter}");
  };

  enteringUserRoleAdmin = () => {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{enter}");
  };
  enteringEmployeeNameStartWithChar = (firstChar) => {
    cy.get(".oxd-autocomplete-text-input > input").type(firstChar);
    cy.wait(3000);
    cy.get(".oxd-autocomplete-text-input > input").type("{downArrow}");
    cy.get(".oxd-autocomplete-text-input > input").type("{downArrow}");
    cy.get(".oxd-autocomplete-text-input > input").type("{enter}");
  };
  enteringStatusEnable = () => {
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{enter}");
  };
  enteringStatusDisable = () => {
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");

    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{downArrow}");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).type("{enter}");
  };

  setUserName = (employeeUsername) => {
    cy.contains('div',"Username").next().find("input").clear().type(employeeUsername) 
    
    
    // cy.get(
    //   ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    // ).type(employeeUsername);
  };
  setPassword = (employeePassword) => {
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(employeePassword);
  };
  setConfirmPassowrd = (employeeConfirmPassword) => {
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(employeeConfirmPassword);
  };
  
  clickSave = () => {
    cy.get(".oxd-button--secondary").click();
  };
}
