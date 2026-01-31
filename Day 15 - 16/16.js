function saveData() {
  let name = document.getElementById("username").value;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // LocalStorage (Permanent)
  localStorage.setItem("localUser", name);

  // SessionStorage (Temporary)
  sessionStorage.setItem("sessionUser", name);

  alert("Data saved successfully");
}

function showData() {
  let localUser = localStorage.getItem("localUser");
  let sessionUser = sessionStorage.getItem("sessionUser");

  document.getElementById("result").innerHTML =
    "LocalStorage: " + localUser + "<br>" +
    "SessionStorage: " + sessionUser;
}

function clearData() {
  localStorage.clear();
  sessionStorage.clear();

  document.getElementById("result").innerHTML = "";
  alert("Storage cleared");
}
