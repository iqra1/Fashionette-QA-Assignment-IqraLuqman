package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        plugin = {"pretty","html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
        monochrome = true,
        glue={"PageStepDefinitions"},
        tags={"@addToCart,@applyVoucher,@modifyUser"}
)
public class RunTest{
}
