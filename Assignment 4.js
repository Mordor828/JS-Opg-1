//ASSIGNMENT 4 Write an IF/ELSE conditional statement that checks that userName isn't
//empty(""), that the user age is 18+, and that userIsBlocked is false.

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName !== "" && userAge >= 18 && !userIsBlocked) {
  goToPage = "WelcomePage";
} else {
  goToPage = "AccessDeniedPage";
}
