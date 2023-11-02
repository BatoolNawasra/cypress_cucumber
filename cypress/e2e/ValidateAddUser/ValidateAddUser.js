import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginActions } from "../../integration/Pages/LoginPage/Actions";
import { DashboardAssertions } from "../../integration/Pages/DashboardPage/assertions";
import { DashboardActions } from "../../integration/Pages/DashboardPage/actions";
import { AdminActions } from "../../integration/Pages/AdminPage/actions";
import { AddUserActions } from "../../integration/Pages/AddUserPage/actions";
import { AddUserAssertions } from "../../integration/Pages/AddUserPage/assertions";
import { AdminAssertions } from "../../integration/Pages/AdminPage/assertions";

const loginActions = new LoginActions();
const dashboardAssertions = new DashboardAssertions();
const dashboardActions = new DashboardActions();
const adminActions = new AdminActions();
const addUserActions = new AddUserActions();
const addUserAssertions = new AddUserAssertions();
const adminAssertions = new AdminAssertions();

Given("admin logs in to the system", () => {
  loginActions.visitOrangeHERWebsite();
  loginActions.setUserName("Admin");
  loginActions.setPassword("admin123");
  loginActions.clickLoginButton();
  dashboardAssertions.verifyLogin();
});

Given('Navigate to the "Admin" page', () => {
  dashboardActions.navigateToAdminPage();
  adminAssertions.verifyNavigationAdminPage();
});

Given('clicks on the "Add" button', () => {
  adminActions.clickAddButton();
  //  addUserAssertions.verifyInAddPage();
});

When("Admin enters valid information for the new user", () => {
  addUserActions.setUserName("kkk Nawasra");
  addUserActions.setPassword("123Asd0@");
  addUserActions.setConfirmPassowrd("123Asd0@");
  addUserActions.enteringEmployeeNameStartWithChar("a");
  addUserActions.enteringUserRoleAdmin();
  addUserActions.enteringStatusEnable();
});

When('clicks the "Save" button', () => {
  cy.wait(1000);
  addUserActions.clickSave();
});

Then("User navigate to admin page successfully", () => {
  adminAssertions.verifyNavigationAdminPage();
});
