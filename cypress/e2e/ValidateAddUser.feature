Feature: Testing Add User Form

    Background:
        Given admin logs in to the system
        Given Navigate to the "Admin" page
        Given clicks on the "Add" button

    Scenario: Add User with Valid Information
        When Admin enters valid information for the new user
        When clicks the "Save" button
        Then User navigate to admin page successfully
