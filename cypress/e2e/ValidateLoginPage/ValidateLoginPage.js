import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";

import { LoginActions, LoginActionsons } from "../../integration/Pages/LoginPage/Actions";
import { DashboardAssertions, DashboardAssertionsrtions } from "../../integration/Pages/DashboardPage/assertions";

const logAction = new LoginActions();
const dashAssertion = new DashboardAssertions();
Given("User navigate to the Website", () => {
  logAction.visitOrangeHERWebsite();
});

When("User enter a username and password", () => {
  logAction.setUserName("Admin");
  logAction.setPassword("admin123");
});

When("User click on the log-in button", () => {
  logAction.clickLoginButton();
});

Then('User validate that the title after login is "Dashboard"', () => {
  dashAssertion.verifyLogin();
});
