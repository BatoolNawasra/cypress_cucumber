export class DashboardActions {
  navigateToAdminPage() {
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]')
      .should("be.visible")
      .click();
    cy.wait(1000);
  }
}
