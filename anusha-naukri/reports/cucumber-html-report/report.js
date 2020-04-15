$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/anunaukri.feature");
formatter.feature({
  "line": 2,
  "name": "naukri website",
  "description": "",
  "id": "naukri-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check whether user can register naukri account",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-register-naukri-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user opens the naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter valid details for register",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "submit the register button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "To check whether user can login naukri account",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-login-naukri-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@tc02_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user already launchs the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user already opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter \"\u003cEmail Id\u003e\" and \"\u003cpassword\u003e\" to open login page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "submit the login button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-login-naukri-account;",
  "rows": [
    {
      "cells": [
        "Email Id",
        "password"
      ],
      "line": 22,
      "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;1"
    },
    {
      "cells": [
        "manasaanthireddy34@gmail.com",
        "Manasa@34"
      ],
      "line": 23,
      "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;2"
    },
    {
      "cells": [
        "manasaanthireddy73@gmail.com",
        "Manasa@73"
      ],
      "line": 24,
      "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;3"
    },
    {
      "cells": [
        "manasareddy#gmail.com",
        "manasa"
      ],
      "line": 25,
      "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "To check whether user can login naukri account",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 13,
      "name": "@tc02_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user already launchs the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user already opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter \"manasaanthireddy34@gmail.com\" and \"Manasa@34\" to open login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "submit the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 24,
  "name": "To check whether user can login naukri account",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 13,
      "name": "@tc02_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user already launchs the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user already opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter \"manasaanthireddy73@gmail.com\" and \"Manasa@73\" to open login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "submit the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "To check whether user can login naukri account",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-login-naukri-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 13,
      "name": "@tc02_login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user already launchs the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user already opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enter \"manasareddy#gmail.com\" and \"manasa\" to open login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "submit the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 28,
  "name": "To check whether user can go to job search page",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-go-to-job-search-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc03_Advancejobsearchpage"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user already on chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user go to naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user go to search page and search for the jobs",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 35,
  "name": "To check whether user Search Interview questions",
  "description": "",
  "id": "naukri-website;to-check-whether-user-search-interview-questions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@tc04_InterviewQuestions"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User opens Naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user enter into companies",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 42,
  "name": "To check whether user can open Homecalculator page",
  "description": "",
  "id": "naukri-website;to-check-whether-user-can-open-homecalculator-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc05_HomeCalculator"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user launchs the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "user enters naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user enters home calculator page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 49,
  "name": "check that the user can login naukri account",
  "description": "",
  "id": "naukri-website;check-that-the-user-can-login-naukri-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@tc06_login"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "user opens naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "user clicks login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 57,
  "name": "check that the user can click more and move to any field",
  "description": "",
  "id": "naukri-website;check-that-the-user-can-click-more-and-move-to-any-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@tc07_more"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "user can launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user opens the naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user can click more and move to any field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 66,
  "name": "check that the user is able to follow hr",
  "description": "",
  "id": "naukri-website;check-that-the-user-is-able-to-follow-hr",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@tc08_HR"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "user launchs the chrome browser to follow hr",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user opens the naukri homepage for hr",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "user logins to naukri page",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "user applys filter",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 74,
  "name": "check that the user can search for recruiters",
  "description": "",
  "id": "naukri-website;check-that-the-user-can-search-for-recruiters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@tc09_search_recruiters"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "user launched the chrome browser for search_recruiters scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "user launches naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "user login the naukri page",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "the user can go to recruiters",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 82,
  "name": "account logout",
  "description": "",
  "id": "naukri-website;account-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@tc10_logout"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "user logged in on the site",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "user click on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "user recieve feedback that it is logged out",
  "keyword": "Then "
});
formatter.step({
  "line": 87,
  "name": "user cannot visit account page anymore",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 92,
  "name": "check that the user can search for job",
  "description": "",
  "id": "naukri-website;check-that-the-user-can-search-for-job",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@tc12_search"
    }
  ]
});
formatter.step({
  "line": 93,
  "name": "user launched the chrome browser for search scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 94,
  "name": "user opens naukri homepage for search scenario",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "when user clicks search",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 98,
  "name": "check that the user can click more and move to any field",
  "description": "",
  "id": "naukri-website;check-that-the-user-can-click-more-and-move-to-any-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@tc13_more"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "user can launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "user opens the naukri homepage",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "user clicks login button",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "user can click more and move to any field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 105,
  "name": "check that the user is able to apply filter",
  "description": "",
  "id": "naukri-website;check-that-the-user-is-able-to-apply-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@tc14_filter"
    }
  ]
});
formatter.step({
  "line": 106,
  "name": "user  launchs the chrome browser for filter option",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "user opens the naukri homepage for filter option",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "user clicks login button for filter option",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "user applys filter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});