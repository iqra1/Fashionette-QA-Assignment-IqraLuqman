package PageStepDefinitions;

import PageFactory.AddToCartPage;
import PageFactory.LoginPage;
import PageFactory.MainPage;
import PageFactory.UserPersonalDetailsPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;

import static java.lang.Integer.*;


public class StepDefinitions {
    public String URL="https://www.fashionette.co.uk";
    WebDriver webdriver;
    String rootPath = System.getProperty("user.dir");
    String chromeDriverPath = "/driver/chromedriver";
    private static final Logger log = LogManager.getLogger(StepDefinitions.class);

    @Given("^user open browser$")
    public void user_open_browser(){

            System.setProperty("webdriver.chrome.driver", rootPath+chromeDriverPath);
            webdriver = new ChromeDriver();
            webdriver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            log.info("Browser is googleChrome");
            webdriver.manage().window().maximize();
    }

    @And("^user go to the fashionette page$")
    public void user_go_to_the_fashionette_page() throws Throwable {

            webdriver.get(URL);
            Thread.sleep(5000);
            MainPage main=new MainPage(webdriver);
            main.acceptAll();
            log.info("User go to: " + URL);

    }

    @And("^user click on login icon$")
    public void user_click_on_login_icon() throws Throwable {

            MainPage main=new MainPage(webdriver);
            main.loginIcon();
            log.info("User click on login icon");

    }

    @And("^user enter the email$")
    public void user_enter_the_email() throws Throwable {
            waitForPageLoaded();
            LoginPage login=new LoginPage(webdriver);
            login.enterEmail();
            log.info("User enter email address: " + login.userEmail);

    }

    @And("^user enter the password$")
    public void user_enter_the_password() throws Throwable {
            
        LoginPage login=new LoginPage(webdriver);
            login.enterPassword();
            log.info("User enter password: " + login.userPassword);

    }

    @And("^user click on the login button$")
    public void user_click_on_the_login_button() throws Throwable {
            LoginPage login=new LoginPage(webdriver);
            login.loginButton();
            log.info("User click on login button ");

    }

    @And("^user click on handbags from menu$")
    public void user_click_on_handbags_from_menu() throws Throwable {
            MainPage main=new MainPage(webdriver);
            main.handBags();
            log.info("User click on handbags from menu ");

    }

    @And("^user click on the bag$")
    public void user_click_on_the_bag() throws Throwable {

            waitForPageLoaded();
            MainPage main=new MainPage(webdriver);
            main.selectedBag();
            log.info("User choose bag");
    }

    @And("^user choose the color$")
    public void user_choose_the_color() throws Throwable {
            waitForPageLoaded();
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.colorPicker();
            log.info("User choose color");

    }

    @And("^user click on add to cart button$")
    public void user_click_on_add_to_cart_button() throws Throwable {
            waitForPageLoaded();
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.addToCart();
            log.info("User add item to the cart");

    }

    @And("^user click on cart icon$")
    public void user_click_on_cart_icon() throws Throwable {
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.goToCart();
            log.info("User go to cart");
    }

    @And("^user click on redeem voucher link$")
    public void user_click_on_redeem_voucher_link() {
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.voucherLink();
            log.info("User click on voucher link");

    }

    @And("^user enter voucher code$")
    public void user_enter_voucher_code() {
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.enterVoucher();
            log.info("User enter voucher code");

    }

    @And("^user click on redeem voucher button$")
    public void user_click_redeem_voucher_button() {
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.redeemButton();
            log.info("User click on redeem voucher button");

    }
    @And("user click on the personal details")
    public void user_click_on_the_personal_details() {
            UserPersonalDetailsPage userDetails=new UserPersonalDetailsPage(webdriver);
            waitForPageLoaded();
            JavascriptExecutor js = (JavascriptExecutor) webdriver;
            js.executeScript("document.getElementsByClassName('.account-personaldata').scrollDown += 100");
            userDetails.personalDetails();
            log.info("User go to personal details");

    }

    @And("user modify name and surname")
    public void user_modify_name_and_surname() {
            UserPersonalDetailsPage userDetails=new UserPersonalDetailsPage(webdriver);
            userDetails.editButton();
            log.info("User click on edit button");
            userDetails.salutation();
            log.info("User click on Mrs salutation");
            userDetails.firstName();
            log.info("User update his Firstname: " + userDetails.firstname);
            userDetails.surName();
            log.info("User update his Surname: " + userDetails.lastname);

    }

    @And("user click on save")
    public void user_click_on_save() {
            UserPersonalDetailsPage userDetails=new UserPersonalDetailsPage(webdriver);
            userDetails.saveButton();
            log.info("User saved changes");

    }

    @Then("user validate the changes")
    public void user_validate_the_changes() throws InterruptedException {
            Thread.sleep(2000);
            UserPersonalDetailsPage userDetails=new UserPersonalDetailsPage(webdriver);
            String details = userDetails.CustomerDetails();
            log.info("details updated: " + details);
            Assert.assertTrue("Text not found!", details.contains("Mrs Iqra Luqman"));


    }

    @Then("^user validate the product details after voucher apply$")
    public void user_validate_that_product_details_after_voucher_apply() throws Throwable {
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            String discount= addToCart.voucherAmount().substring(2,3);
            log.info("discount amount: " + discount);
            String subTotal= addToCart.cartSubtotal().substring(1,7);
            log.info("Subtotal price: " + subTotal);
            int discountAmount= parseInt(discount);
            int actualAmount= parseInt(subTotal);
            int discounted= actualAmount - discountAmount;
            log.info(discounted);
            String totalAfterDiscount = String.valueOf(discounted);
            log.info("Total price after discount: " + "£" +totalAfterDiscount);
            String total=addToCart.cartTotal();
            Assert.assertEquals(totalAfterDiscount,total);
    }

    @Then("^user validate that product details added to the cart$")
    public void user_validate_that_product_details_added_to_the_cart() throws Throwable {
            waitForPageLoaded();
            AddToCartPage addToCart=new AddToCartPage(webdriver);
            addToCart.cartProductDetails();
            String actualPrice = addToCart.productPrice();
            addToCart.closeProductDetails();
            log.info("price of the bag is: " + actualPrice);
            String priceOnCart=addToCart.cartTotal();
            log.info("price of the bag displaying on cart: " + priceOnCart);
            Assert.assertEquals(actualPrice,priceOnCart);

    }

    @And("^user close the browser$")
    public void user_close_the_browser() throws Throwable {
            Browser_quit();

    }

    //When Test fails
    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) webdriver).getScreenshotAs(OutputType.BYTES);
            // embed it in the report.
            scenario.embed(screenshot, "image/png");
            webdriver.quit();
        }
    }

    // Wait function for page load
    public void waitForPageLoaded() {
        ExpectedCondition<Boolean> expectation = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
                    }
                };
        try {
            Thread.sleep(1000);
            WebDriverWait wait = new WebDriverWait(webdriver, 30);
            wait.until(expectation);
        } catch (Throwable error) {
            Assert.fail("Timeout waiting for Page Load Request to complete.");
        }
    }

    public void Browser_quit(){

            webdriver.quit();
    }
}
