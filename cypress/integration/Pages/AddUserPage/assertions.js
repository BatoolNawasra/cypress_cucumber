export class AddUserAssertions {
  verifyInAddPage = () => {
    cy.get(".orangehrm-main-title").should("have.txt", "Add User");
  };
}
