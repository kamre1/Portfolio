// Your dynamic content array
const dynamicContentArray = ["Frontend Developer", "Web Designer", "UI/UX Designer"];

// Select the elements
const dynamicText = document.getElementById("dynamicText");
const dynamicContent = document.getElementById("dynamicContent");

let currentIndex = 0;
let currentText = dynamicContentArray[currentIndex];
let letterIndex = 0;
let isDeleting = false; // Flag to indicate whether to delete or add letters

// Function to update dynamic content
function updateDynamicContent() {
    if (isDeleting) {
        // Delete letters
        dynamicContent.textContent = currentText.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            // Switch to the next text after deletion is complete
            isDeleting = false;
            currentIndex = (currentIndex + 1) % dynamicContentArray.length;
            currentText = dynamicContentArray[currentIndex];
        }
    } else {
        // Add letters
        dynamicContent.textContent = currentText.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentText.length) {
            // Start deleting after adding is complete
            isDeleting = true;
            setTimeout(updateDynamicContent, 1000); // Adjust the timeout for the pause before deletion
        }
    }
}

// Update dynamic content every 100 milliseconds (adjust the interval for your desired typing speed)
setInterval(updateDynamicContent, 300);

// progess bar
document.querySelectorAll('.animate-progress').forEach((element) => {
    element.style.animation = 'animate 1.5s cubic-bezier(1, 0.2, 0.2, 1) forwards';
});

