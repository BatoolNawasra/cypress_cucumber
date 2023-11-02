export class AdminAssertions {
  
  verifyNavigationAdminPage = () => {
    cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", "Admin");

    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  };

  verifyDeleted = () => {
    cy.contains("Successfully Deleted").should("be.visible");
  };

  verifyAdded = () => {
    cy.contains("Successfully Saved").should("be.visible");
  };
}
