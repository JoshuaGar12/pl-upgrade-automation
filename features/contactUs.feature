  Feature: Contact Us Page
 
 @regression 
  Scenario Outline: Check if the user can navigate to Contact Us Page
    Given I logged in with valid <username> and <password>
    When I click <navbutton> button
    Then User should redirect to <navPage>

 Examples:
      | username             | password     | navbutton  | navPage   |
      | j.garcia@qstrike.com | Testing123!  | contact-us | Contact Us|
 
 @regression 
  Scenario Outline: Check if the user can navigate to Contact Us Page
    Given I logged in with valid <username> and <password>
    When I click <navbutton> button
    Then I enter a valid inputs in Contact Us Form <fname>, <lname>, <email>, <phoneNum>, <orgName>, <orderNum>, <zipCode>, <address>, <sport>, <message>

  Examples:
      | username             | password     | navbutton  |fname      |lname     |email         |phoneNum    |orgName              |orderNum             |zipCode    |address |sport   | message | 
      | j.garcia@qstrike.com | Testing123!  | contact-us |First Name |Last Name |Email Address |Phone Number|School / Organization|Order Number (If Any)|Zip Code   |Address |Sport(s)| Your Message|
  