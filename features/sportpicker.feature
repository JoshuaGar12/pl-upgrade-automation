 Feature: Sport Picker
 
 @regression 
  Scenario Outline: Check if the user can select sport
    Given I logged in with valid <username> and <password>
    When I click <navbutton> button
    # When I choose <sport> sport and <gender> in sport picker
    # Then I should redirected <sport> design picker
    
    Examples:
      | username             | password     |  sport      | navbutton  | gender | 
      | j.garcia@qstrike.com | Testing123!  |  FOOTBALL   | catalogs | men    | 