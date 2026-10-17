let display = document.getElementById("display");

// ============================================================================
// New Advanced Feature: Standard Memory Registers for Advanced Users
// Supports MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), M- (Memory Subtract)
// ============================================================================

// New Advanced Feature: Memory register variable to store current accumulator value (initialized to 0)
let memoryValue = 0;

// New Advanced Feature: Reference to display memory indicator element
const memoryIndicator = document.getElementById("memoryIndicator");

// New Advanced Feature: Helper function to parse or evaluate current display value into a safe numerical float
function getDisplayNumericValue() {
    try {
        if (!display.value || display.value === "Error") {
            return 0;
        }
        const evaluated = Function('"use strict"; return (' + display.value + ')')();
        return isNaN(evaluated) ? 0 : Number(evaluated);
    } catch {
        return 0;
    }
}

// New Advanced Feature: Helper function to update the visual memory status indicator on the display
function updateMemoryIndicator() {
    if (memoryIndicator) {
        if (memoryValue !== 0) {
            memoryIndicator.textContent = "M";
            memoryIndicator.title = "New Advanced Feature: Stored Memory = " + memoryValue;
            memoryIndicator.classList.add("active");
        } else {
            memoryIndicator.textContent = "";
            memoryIndicator.title = "";
            memoryIndicator.classList.remove("active");
        }
    }
}

// New Advanced Feature: MC (Memory Clear) - Resets stored memory value back to zero
function memoryClear() {
    memoryValue = 0;
    updateMemoryIndicator();
}

// New Advanced Feature: MR (Memory Recall) - Loads stored memory value into the main display
function memoryRecall() {
    display.value = String(memoryValue);
}

// New Advanced Feature: M+ (Memory Add) - Adds current display value to stored memory
function memoryAdd() {
    const currentVal = getDisplayNumericValue();
    memoryValue = parseFloat((memoryValue + currentVal).toFixed(10));
    updateMemoryIndicator();
}

// New Advanced Feature: M- (Memory Subtract) - Subtracts current display value from stored memory
function memorySubtract() {
    const currentVal = getDisplayNumericValue();
    memoryValue = parseFloat((memoryValue - currentVal).toFixed(10));
    updateMemoryIndicator();
}

function addValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();
    } catch {
        display.value = "Error";
    }
}

// ============================================================================
// New Advanced Feature: Square Root & Percentage Calculation Logic
// ============================================================================

// New Advanced Feature: Square Root (√) calculation logic
function calculateSquareRoot() {
    try {
        const val = getDisplayNumericValue();
        if (val < 0) {
            display.value = "Error";
            return;
        }
        const result = parseFloat(Math.sqrt(val).toFixed(10));
        display.value = String(result);
    } catch {
        display.value = "Error";
    }
}

// New Advanced Feature: Percentage (%) calculation logic
function calculatePercentage() {
    try {
        const val = getDisplayNumericValue();
        const result = parseFloat((val / 100).toFixed(10));
        display.value = String(result);
    } catch {
        display.value = "Error";
    }
}

// New Advanced Feature: Toggle Sign (±) calculation logic
function toggleSign() {
    try {
        const val = getDisplayNumericValue();
        const result = parseFloat((-val).toFixed(10));
        display.value = String(result);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ("0123456789+-*/.".includes(key)) {
        addValue(key);
    } else if (key === "%") {
        // New Advanced Feature: Percentage keyboard shortcut
        event.preventDefault();
        calculatePercentage();
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1) || "0";
    }
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});
