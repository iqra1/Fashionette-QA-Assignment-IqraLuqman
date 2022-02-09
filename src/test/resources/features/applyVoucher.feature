Feature:  Apply a voucher
  @applyVoucher
  Scenario: Apply voucher to the product added into the cart
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
    And user click on redeem voucher link
    And user enter voucher code
    And user click on redeem voucher button
    Then user validate the product details after voucher apply
    And user close the browser