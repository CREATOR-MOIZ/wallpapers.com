function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

function showSignupForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function login() {
    // Replace with your actual login logic (e.g., API call, local storage)
    alert("Login successful!");
    // Redirect to wallpaper web after successful login
    window.location.href = "index.html";
}

function passFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function signup() {
    // Replace with your actual signup logic (e.g., API call, local storage)
    alert("Signup successful!");
    // Redirect to wallpaper web after successful signup
    window.location.href = "gemini.html";
}

function myFunction() {
  var x = document.getElementById("mypassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
