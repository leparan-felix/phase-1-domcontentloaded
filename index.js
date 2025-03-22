// Your code goes here
// Set up an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  
    // Target the paragraph element with id="text"
    const textElement = document.getElementById("text");
  
    // Replace the text content with "This is really cool!"
    textElement.textContent = "This is really cool!";
  });
  
  // This console.log() fires when index.js loads - before DOMContentLoaded is triggered
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");