
Feature: Login to a OrangeHRM Website

    Scenario: User logs in and validates the dashboard
        Given User navigate to the Website
        When User enter a username and password
        When User click on the log-in button
        Then User validate that the title after login is "Dashboard"
