package PageFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UserPersonalDetailsPage {
    WebDriver driver;
    public String firstname= "Iqra";
    public String lastname= "Luqman";

    @FindBy(className="account-personaldata")
    public
    WebElement personalData;

    @FindBy(className = "account__address__actions")
    public
    WebElement edit;

    @FindBy(xpath = "//input[@name='first_name']")
    public
    WebElement firstName;

    @FindBy(xpath = "//input[@name='last_name']")
    public
    WebElement surName;

    @FindBy(xpath = "//*[@value='Mrs']")
    public
    WebElement salutation;

    @FindBy(css = ".account--address__action.account--address__action--save")
    public
    WebElement save;

    @FindBy(xpath = "//*[@class='account__content__column account__content__column--customer'][1]")
    public
    WebElement customerDetails;

    //Constructor Method
    public UserPersonalDetailsPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }

    //Methods
    public void personalDetails()
    {
        personalData.click();

    }

    public void editButton()
    {
        edit.click();

    }

    public void salutation()
    {
       salutation.click();

    }

    public void firstName()
    {
        firstName.clear();
        firstName.sendKeys(firstname);

    }

    public void surName()
    {
        surName.clear();
        surName.sendKeys(lastname);

    }
    public void saveButton()
    {
        save.click();

    }
    public String CustomerDetails()
    {
        return customerDetails.getText();

    }

}
