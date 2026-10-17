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
        const expression = display.value;
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();
        display.value = String(result);

        // New Advanced Feature: Record calculation to history side panel
        addHistoryItem(expression, result);
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

        // New Advanced Feature: Record square root to history panel
        addHistoryItem("√(" + val + ")", result);
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

        // New Advanced Feature: Record percentage to history panel
        addHistoryItem(val + "%", result);
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

// ============================================================================
// New Advanced Feature: Interactive Calculation History Side Panel Logic
// ============================================================================

// New Advanced Feature: In-memory store for calculation history
let calculationHistory = [];
const historyPanel = document.getElementById("historyPanel");
const historyList = document.getElementById("historyList");
const historyToggleBtn = document.getElementById("historyToggleBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// New Advanced Feature: Helper function to escape HTML special characters
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// New Advanced Feature: Toggle visibility of the history side panel
function toggleHistoryPanel() {
    if (historyPanel) {
        historyPanel.classList.toggle("open");
        const isOpen = historyPanel.classList.contains("open");
        if (historyToggleBtn) {
            historyToggleBtn.classList.toggle("active", isOpen);
        }
    }
}

// New Advanced Feature: Add a new calculation record into history
function addHistoryItem(expression, result) {
    if (!expression || expression === "0" || expression === String(result)) {
        return;
    }
    const item = {
        expression: expression,
        result: result,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    calculationHistory.unshift(item);
    if (calculationHistory.length > 50) {
        calculationHistory.pop();
    }
    renderHistory();
}

// New Advanced Feature: Render history records into the history side panel
function renderHistory() {
    if (!historyList) return;
    if (calculationHistory.length === 0) {
        historyList.innerHTML = '<p class="history-empty">No calculations yet</p>';
        return;
    }
    historyList.innerHTML = "";
    calculationHistory.forEach((item) => {
        const entry = document.createElement("div");
        entry.className = "history-item";
        entry.setAttribute("role", "button");
        entry.setAttribute("tabindex", "0");
        entry.title = "Click to load result into display";
        entry.innerHTML = `
            <div class="history-item-top">
                <span class="history-expr">${escapeHtml(item.expression)} =</span>
                <span class="history-time">${escapeHtml(item.timestamp)}</span>
            </div>
            <div class="history-result">${escapeHtml(String(item.result))}</div>
        `;
        entry.addEventListener("click", () => {
            display.value = String(item.result);
        });
        historyList.appendChild(entry);
    });
}

// New Advanced Feature: Clear all stored history records
function clearHistory() {
    calculationHistory = [];
    renderHistory();
}

// New Advanced Feature: Event listeners for history panel controls
if (historyToggleBtn) {
    historyToggleBtn.addEventListener("click", toggleHistoryPanel);
}
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", clearHistory);
}
