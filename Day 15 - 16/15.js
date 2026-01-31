document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let valid = true;

  // Name Validation
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email Validation
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  if (valid) {
    alert("Form Submitted Successfully");
  }
});
