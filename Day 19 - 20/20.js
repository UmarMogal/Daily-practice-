let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "AC") {
      display.value = "0";
    }
    else if (value === "=") {
      try {
        display.value = eval(display.value.replace("×", "*").replace("÷", "/").replace("−", "-"));
      } catch {
        display.value = "Error";
      }
    }
    else if (value === "±") {
      display.value = display.value.startsWith("-")
        ? display.value.slice(1)
        : "-" + display.value;
    }
    else if (value === "%") {
      try {
        let val = eval(display.value.replace("×", "*").replace("÷", "/").replace("−", "-"));
        display.value = val / 100;
      } catch {
        display.value = "Error";
      }
    }
    else {
      if (display.value === "0") display.value = "";
      display.value += value;
    }
  });
});

/* Keyboard support */
document.addEventListener("keydown", e => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    if (display.value === "0") display.value = "";
    display.value += e.key;
  }
  if (e.key === "Enter") display.value = eval(display.value);
  if (e.key === "Backspace") display.value = display.value.slice(0, -1);
  if (e.key === "Escape") display.value = "0";
});
