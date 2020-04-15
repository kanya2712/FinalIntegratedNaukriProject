package shradha.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class logout_main {
 WebDriver dr;
 
 By logout_btn1=By.className("logout");
 public logout_main(WebDriver dr)
 {
	 this.dr=dr;
 }
 public void logout_Btn()
 {
	 dr.findElement(logout_btn1).click();
 }
}
