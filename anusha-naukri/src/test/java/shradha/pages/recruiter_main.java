package shradha.pages;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

public class recruiter_main extends login_main{
	
		//To login into the application
	public void login() throws IOException
	{   
        driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
        driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/form/div[2]/input")).sendKeys("demo.skp1234@gmail.com");
		driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/form/div[3]/input")).sendKeys("demo@123");
		driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/form/div[5]/button")).click();
	}
		//To access recruiter field
		public void mouse_actions()
		{
			WebElement a1 = driver.findElement(By.xpath("/html/body/div[1]/div/div/ul[1]/li[2]/a/div"));
			WebElement a2 = driver.findElement(By.xpath("/html/body/div[1]/div/div/ul[1]/li[2]/div/ul/li[1]/a"));
			Actions act = new Actions(driver);
			act.moveToElement(a1);
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
			act.moveToElement(a2).click().build().perform();
			
		}		
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
