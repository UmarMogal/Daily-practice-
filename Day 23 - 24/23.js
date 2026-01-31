let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signupBtn.onclick = function () {
    nameField.classList.remove("hide");
    title.innerHTML = "Signup";
};

loginBtn.onclick = function () {
    nameField.classList.add("hide");
    title.innerHTML = "Login";
};
