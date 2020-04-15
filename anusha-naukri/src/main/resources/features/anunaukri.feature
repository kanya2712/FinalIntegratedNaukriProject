@naukri_Feature
Feature: naukri website

@tc01_Register
Scenario: To check whether user can register naukri account
          
          Given user launchs the chrome browser
          When user opens the naukri homepage 
          Then enter valid details for register
          Then submit the register button


@tc02_login
Scenario Outline: To check whether user can login naukri account
          
          Given user already launchs the chrome 
          When user already opens naukri homepage
          Then user enter "<Email Id>" and "<password>" to open login page
          And submit the login button 
          
Examples: 
                        |Email Id                         |password          |
                        |manasaanthireddy34@gmail.com     |Manasa@34         |      
                        |manasaanthireddy73@gmail.com     |Manasa@73         |
                        |manasareddy#gmail.com            |manasa            |
                       
@tc03_Advancejobsearchpage
Scenario: To check whether user can go to job search page
          
          Given user already on chrome
          When user go to naukri homepage
          Then user go to search page and search for the jobs
          
@tc04_InterviewQuestions
Scenario: To check whether user Search Interview questions
          
          Given user is on chrome
          When User opens Naukri homepage
          Then user enter into companies
  
@tc05_HomeCalculator
Scenario: To check whether user can open Homecalculator page

          Given user launchs the chrome
          When user enters naukri homepage
          Then user enters home calculator page
          
 @tc06_login
Scenario: check that the user can login naukri account

	
Given  user launched the chrome browser 
When  user opens naukri homepage 
Then user clicks login 

@tc07_more
Scenario: check that the user can click more and move to any field

	
Given  user can launched the chrome browser 
When  user opens the naukri homepage  
Then user clicks login button
And  user can click more and move to any field	

@tc08_HR
Scenario: check that the user is able to follow hr
	
Given user launchs the chrome browser to follow hr
When  user opens the naukri homepage for hr
When user logins to naukri page
Then user applys filter

@tc09_search_recruiters
Scenario: check that the user can search for recruiters
	
Given  user launched the chrome browser for search_recruiters scenario
When user launches naukri homepage
When user login the naukri page
Then the user can go to recruiters
	
@tc10_logout
Scenario: account logout

Given  user logged in on the site
When user click on logout button
Then user recieve feedback that it is logged out
And user cannot visit account page anymore


	
@tc12_search
Scenario:	 check that the user can search for job 
Given user launched the chrome browser for search scenario
When user opens naukri homepage for search scenario
Then when user clicks search 	

@tc13_more
Scenario: check that the user can click more and move to any field
Given  user can launched the chrome browser 
When  user opens the naukri homepage  
Then user clicks login button
And  user can click more and move to any field	
	
@tc14_filter
Scenario:	 check that the user is able to apply filter
Given  user  launchs the chrome browser for filter option
When  user opens the naukri homepage for filter option
Then user clicks login button for filter option
And  user applys filter         