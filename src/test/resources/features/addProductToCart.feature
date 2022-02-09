Feature:  Add product to the cart
  @addToCart
  Scenario: login and add product into the cart
    Given user open browser
    When user go to the fashionette page
    And user click on login icon
    And user enter the email
    And user enter the password
    And user click on the login button
    And user click on handbags from menu
    And user click on the bag
    And user choose the color
    And user click on add to cart button
    And user click on cart icon
    Then user validate that product details added to the cart
    And user close the browser