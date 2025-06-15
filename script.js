// Get the display input element
const display = document.getElementById("display");

// Function to append clicked button value to the display 
function appendValue(value) {
  display.value += value;
}


// Function to clear the display content
function clearDisplay() {
  display.value = "";
}

// Function to evaluate the expression in the display
function calculate() {
  try {

    // Use eval() to compute the expression
    display.value = eval(display.value);
  } catch {

    // Show "Error" if expression is invalid
    display.value = "Error";
  }
}

// Function to delete one character at a time (backspace)
function backspace() {
  display.value = display.value.slice(0, -1);
}
