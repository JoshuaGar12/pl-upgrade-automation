 Feature: Design Picker
 
 @regression 
  Scenario Outline: Check if the user can scroll down in design picker page
    Given I logged in with valid <username> and <password>
    When I click <navbutton> button
    When I choose <sport> sport and <gender> in sport picker
    When I select colors in color wheel
    When I scroll down in the design picker page
    # When I search for the <blockName> in design picker
    
    Examples:
      | username             | password     |  sport      | navbutton  | gender | blockName               | 
      | j.garcia@qstrike.com | Testing123!  |  BASEBALL   | customizer | men    | Full Length Speed Jersey| 
      | j.martin@qstrike.com | Testing123!  |  FOOTBALL   | customizer | men    | Full Length Speed Jersey| 

