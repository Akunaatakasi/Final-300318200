// Initialize a global variable for the target date
var countDown;

// Function to start the countdown based on user input
function start() {
    var dateInput = document.getElementById("date").value;
    if (dateInput) {
        // Parse the input date and set it as the target date
        countDown = new Date(dateInput);
        // Ensure the date is valid
        if (countDown instanceof Date && !isNaN(countDown.getTime())) {
            // Start or reset the countdown
            clearInterval(interval);
            interval = setInterval(runClock, 1000);
            runClock(); // Update immediately
        } else {
            alert("Invalid date. Please enter a valid future date.");
        }
    } else {
        alert("Please select a date.");
    }
}

// Function to update the countdown
function runClock() {
    if (!countDown) return; // Check if the target date is set

    // Get the current date and time
    var now = new Date();
    var distance = countDown - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").textContent = days;
    document.getElementById("hrs").textContent = hrs;
    document.getElementById("mins").textContent = mins;
    document.getElementById("secs").textContent = secs;

    // If the countdown is finished
    if (distance < 0) {
        document.getElementById("demo").textContent = "Happy Event!";
        clearInterval(interval); // Stop the countdown
    }
}

// Set up an interval variable
var interval;
