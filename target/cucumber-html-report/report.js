$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addProductToCart.feature");
formatter.feature({
  "name": "Add product to the cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login and add product into the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addToCart"
    }
  ]
});
formatter.step({
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go to the fashionette page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_the_fashionette_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_login_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the email",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on handbags from menu",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_handbags_from_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the bag",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_bag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user choose the color",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_choose_the_color()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on cart icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_cart_icon()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".header__cart\\-icon\"}\n  (Session info: chrome\u003d98.0.4758.80)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027Iqras-MacBook-Air.local\u0027, ip: \u00272400:adc5:40a:c300:0:0:0:1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002711.5.2\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.80, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/d9/f4lvl1ld06n...}, goog:chromeOptions: {debuggerAddress: localhost:51963}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 38fa77a027c872be7de8b85f367242e1\n*** Element info: {Using\u003dclass name, value\u003dheader__cart-icon}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:456)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat jdk.proxy2/jdk.proxy2.$Proxy30.click(Unknown Source)\n\tat PageFactory.AddToCartPage.goToCart(AddToCartPage.java:89)\n\tat PageStepDefinitions.StepDefinitions.user_click_on_cart_icon(StepDefinitions.java:126)\n\tat ✽.user click on cart icon(file:src/test/resources/features/addProductToCart.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "user validate that product details added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_validate_that_product_details_added_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/applyVoucher.feature");
formatter.feature({
  "name": "Apply a voucher",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Apply voucher to the product added into the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@applyVoucher"
    }
  ]
});
formatter.step({
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go to the fashionette page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_the_fashionette_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_login_icon()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: not connected to DevTools\n  (Session info: chrome\u003d98.0.4758.80)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027Iqras-MacBook-Air.local\u0027, ip: \u00272400:adc5:40a:c300:0:0:0:1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002711.5.2\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.80, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: /var/folders/d9/f4lvl1ld06n...}, goog:chromeOptions: {debuggerAddress: localhost:52182}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ab65a80d4df30f7bf7c7c114a4de1670\n*** Element info: {Using\u003dcss selector, value\u003da.header__user-icon}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat jdk.proxy2/jdk.proxy2.$Proxy30.click(Unknown Source)\n\tat PageFactory.MainPage.loginIcon(MainPage.java:36)\n\tat PageStepDefinitions.StepDefinitions.user_click_on_login_icon(StepDefinitions.java:56)\n\tat ✽.user click on login icon(file:src/test/resources/features/applyVoucher.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter the email",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on handbags from menu",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_handbags_from_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the bag",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user choose the color",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_choose_the_color()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on cart icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_cart_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on redeem voucher link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_redeem_voucher_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter voucher code",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_voucher_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on redeem voucher button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_redeem_voucher_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validate the product details after voucher apply",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_validate_that_product_details_after_voucher_apply()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/modifyUserInfo.feature");
formatter.feature({
  "name": "Modify user name and surname",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Modify user details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@modifyUser"
    }
  ]
});
formatter.step({
  "name": "user open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go to the fashionette page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_go_to_the_fashionette_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_login_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the email",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the personal details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_the_personal_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user modify name and surname",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_modify_name_and_surname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the changes",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.user_validate_the_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});