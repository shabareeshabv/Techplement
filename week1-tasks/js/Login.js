// login.js
function toggleForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (formType === "login") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
  } else if (formType === "signup") {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
  }
}
