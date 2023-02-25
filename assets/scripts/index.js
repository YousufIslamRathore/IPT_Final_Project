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
  window.location.assign("./home.html")
}