package PageFactory;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddToCartPage {
    WebDriver driver;
    String voucherCode="qachallenge";

    @FindBy(xpath = "//*[@title='Liz Shopper Medium Black']")
    public
    WebElement colorPicker;

    @FindBy(xpath = "//*/form[1]/div[2]/div[1]")
    public
    WebElement addToCart;

    @FindBy(xpath = "//*[@class='header__cart-icon']")
    public
    WebElement goToCart;

    @FindBy(xpath = "//*[@class='product-details__description__price--special font-size--h1 text__weight--semi-bold']")
    public
    WebElement productPrice;

    @FindBy(xpath = "//small[contains(text(),'Liz Shopper Medium Black')]")
    public
    WebElement productTitle;

    @FindBy(id ="cart__total")
    public
    WebElement cartTotal;

    @FindBy(xpath ="/html/body/div[1]/div[2]/div[1]/div[1]/div/div[2]/div/table/tbody/tr[2]/td")
    public
    WebElement cartSubtotal;

    @FindBy(className ="cart-item--price")
    public
    WebElement productInitialPrice;

    @FindBy(className ="cart__sum__voucher-link")
    public
    WebElement voucherLink;

    @FindBy(xpath ="//input[@name='voucherCode']")
    public
    WebElement voucherfield;

    @FindBy(xpath ="//button[contains(text(),'redeem')]")
    public
    WebElement redeemButton;

    @FindBy(xpath ="//span[contains(text(),'-£2')]")
    public
    WebElement voucherAmount;

    @FindBy(className="cart-item")
    public
    WebElement cartProductDetails;


    //Constructor Method
    public AddToCartPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }


    public void colorPicker()
    {

         colorPicker.click();
    }

    public void addToCart()
    {

         addToCart.click();
    }

    public void goToCart()
    {

        goToCart.click();
    }

    public String productPrice()
    {

        return productPrice.getText();
    }

    public String productTitle()
    {

        return productTitle.getText();
    }

    public String cartSubtotal()
    {

        return cartSubtotal.getText();
    }

    public String cartTotal()
    {

        return cartTotal.getText();
    }

    public String productInitialPrice()
    {

        return productInitialPrice.getText();
    }

    public void voucherLink()
    {

         voucherLink.click();
    }

    public void enterVoucher()
    {

        voucherfield.sendKeys(voucherCode);
    }

    public void redeemButton()
    {

        redeemButton.click();
    }

    public String voucherAmount()
    {

        return voucherAmount.getText();
    }

    public void cartProductDetails()
    {

        cartProductDetails.click();
    }

    public void closeProductDetails()
    {

        Actions action = new Actions(driver);
        action.sendKeys(Keys.ESCAPE);
    }

}
