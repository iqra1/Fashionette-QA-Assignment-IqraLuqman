package PageFactory;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

    WebDriver driver;
    public String userEmail= "QA@fashionette.de";
    public String userPassword= "!8Ntr*BM@!#G3VH";

    @FindBy(xpath="//*[@name='email']")
    public
    WebElement email;

    @FindBy(xpath="//*[@name='password']")
    public
    WebElement password;

    @FindBy(xpath="//button[contains(text(),'Login')]")
    public
    WebElement login;

    //Constructor Method
    public LoginPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }


    public void enterEmail()
    {
        email.sendKeys(userEmail);
    }

    public void enterPassword()
    {

        password.sendKeys(userPassword);
    }

    public void loginButton()
    {

        login.click();
    }

}
