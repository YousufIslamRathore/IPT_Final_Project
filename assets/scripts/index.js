function signUp2StepsToggler(redirectorSection, key) {
  const signerMessage = document.getElementById("signerMessage");
  const signUp2Btn = document.getElementById("signUp2Btn");
  redirectorSection.className = "active-redirector";
  if (key == 0) {
    redirectorSection.nextElementSibling.className = "";
    signerMessage.firstElementChild.innerHTML = "Sign Up and Create Course!";
    signUp2Btn.innerHTML = "Instructor Sign Up Now";
  } else if (key == 1) {
    redirectorSection.previousElementSibling.className = "";
    signerMessage.firstElementChild.innerHTML = "Sign Up and Start Learning!";
    signUp2Btn.innerHTML = "Student Sign Up Now";
  }
}

function homeIcon() {
  window.location.assign("./home.html");
}
function homePage() {
  window.location.assign("./home.html")
}
function aboutUsPage() {
  window.location.assign("./aboutUs.html");
}
function contactUsPage() {
  window.location.assign("./contactUs.html");
}
function faqsPage() {
  window.location.assign("./faqsPage.html")
}
function loginPage() {
  window.location.assign("./login.html");
}
function signupPage() {
  window.location.assign("./signUp.html");
}
function allCoursesPage() {
  window.location.assign("./allCourses.html")
}