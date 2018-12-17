@login
Feature: Login and Logout user
  As a customer
  I want to be able to open https://app.signaturit.com page
  So that I can login and logout from the page

  @smoke
  Scenario: Log In - Successful Log In
    Given I am on the login page
    When user sends correct access credentials
    Then user is correctly logged in