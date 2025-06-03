Feature: Login

@regression @testGar
  Scenario Outline: Check if the User can login

    Given I logged in with valid <username> and <password>
    Then I will be redirected to the Landing Page

    Examples:
      | username             | password     | btnValue   | 
      | j.garcia@qstrike.com | Testing123!  | Customizer |


