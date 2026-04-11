[
  // Add event listeners
document.getElementById("btnPlus").addEventListener("click", increaseCount),
document.getElementById("btnMinus").addEventListener("click", decreaseCount),
document.getElementById("btnReset").addEventListener("click", resetCount),
document.getElementById("btnSave").addEventListener("click", saveCount),
document.getElementById("btnLoad").addEventListener("click", loadCount),
]

// Declare the counter
let count = 0;

// Load counter when the page opens
loadCount();

// Function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}

// Function to increase the counter
function increaseCount() {
  count++;
  updateCount();
}

// Function to decrease the counter
function decreaseCount() {
  if (count > 0) {
  count--;
    updateCount();
  }
}

// Function to reset the counter
function resetCount() {
  count = 0;
  updateCount();
}

// Function to save the counter
function saveCount() {
  localStorage.setItem("count", count);
}

// Function to load the counter
function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  updateCount();
}