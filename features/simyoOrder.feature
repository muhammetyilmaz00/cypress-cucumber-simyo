@regression
Feature: Simyo SIM Only Order

  Scenario: Successfully order a SIM only subscription
    Given I am on the Simyo website
    When I click on Sim Only link
    And I click on Bestellen button
    And I click Verder button in Simkaart step
    And I click Verder button in Nummer step
    And I fill in all personal details in Gegevens step
      | aanhef | voornaam | achternaam | geboortedatum | postcode | huisnummer | toevoeging | stad   | straat | email               |
      | Dhr.   | John     | Alton     |      10101980 |   1234AB |        123 | C          | Leiden | Grass  | johnalton@gmail.com |
    And I click Verder button in Gegevens step
    Then I should see the personal details validated in Controle step
      | aanhef | voornaam | achternaam | email               | straat | huisnummer | toevoeging | postcode | stad   |
      | Dhr.   | John     | Alton     | johnalton@gmail.com | Grass  |        123 | C          |   1234AB | Leiden |
