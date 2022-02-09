Feature:  Modify user name and surname
  @modifyUser
    Scenario: Modify user details
            Given user open browser
            When user go to the fashionette page
            And user click on login icon
            And user enter the email
            And user enter the password
            And user click on the login button
            And user click on the personal details
            And user modify name and surname
            And user click on save
            And user validate the changes
            Then user close the browser