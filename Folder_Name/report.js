$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.User_is_on_Home_Page()"
});
formatter.result({
  "duration": 15505167742,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.User_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 3474721422,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.User_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 359742645,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.Message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 102633,
  "status": "passed"
});
});