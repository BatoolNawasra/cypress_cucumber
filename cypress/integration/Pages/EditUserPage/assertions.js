export class EditUserAssertions {
  verifyInEditPage = () => {
    cy.get(".orangehrm-main-title").should("have.txt", "Edit User");
  };
}
