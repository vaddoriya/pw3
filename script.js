document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const countDisplay = document.getElementById("count");
    const decrementButton = document.getElementById("decrement");
    const incrementButton = document.getElementById("increment");
    const resetButton = document.getElementById("reset");

    let count = 0;

    // Function to update and display the count
    function updateCount() {
        countDisplay.textContent = count;
    }

    // Event listeners for the buttons
    decrementButton.addEventListener("click", function() {
        count--;
        updateCount();
    });

    incrementButton.addEventListener("click", function() {
        count++;
        updateCount();
    });

    resetButton.addEventListener("click", function() {
        count = 0;
        updateCount();
    });

    // Initial count display
    updateCount();
});
