// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteonebyone() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);  // Remove the last character
}

function decimal() {
    let display = document.getElementById('display');
    if (!display.value.includes('.')) { // Prevent adding multiple decimals
        display.value += '.';
    }
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // eval() evaluates the string as a mathematical expression
    } catch (error) {
        display.value = 'Error';  // If there's an error, display "Error"
    }
}
