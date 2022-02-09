package PageFactory;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class MainPage {

        WebDriver driver;

        @FindBy(css="a.header__user-icon")
        public
        WebElement loginIcon;

        @FindBy(xpath = "//*[@class='header__navigation']/ul/li[3]")
        public
        WebElement handBags;

        @FindBy(xpath = "//*[@title='MCM, Liz Shopper Medium Cognac']")
        public
        WebElement selectedBag;


        //Constructor Method
        public MainPage(WebDriver driver) {
                this.driver=driver;
                PageFactory.initElements(driver,this);
        }

        //Methods
        public void loginIcon()
        {
                loginIcon.click();

        }

        public void handBags()
        {
                handBags.click();

        }

        public void selectedBag()
        {
                selectedBag.click();

        }

        public void acceptAll() throws InterruptedException {

                JavascriptExecutor js = (JavascriptExecutor) driver;
                WebElement element= (WebElement) js.executeScript("return document.getElementById('usercentrics-root').shadowRoot.querySelector(`[data-testid='uc-accept-all-button']`)");
                element.click();
        }


}
