// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// Scroll-to-top Button Visibility and Functionality
const scrollBtn = document.getElementById("scroll-to-top");

// Show the button when the user scrolls down
window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none"; // Display button after 200px scroll
});

// Smooth scroll to the top when the button is clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Form Validation for Contact Form
const form = document.getElementById("contact-form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

form.addEventListener("submit", function (e) {
    let valid = true;

    // Validate Name (non-empty)
    if (nameField.value.trim() === "") {
        valid = false;
        alert("Name is required.");
    }

    // Validate Email (simple pattern)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value.trim())) {
        valid = false;
        alert("Please enter a valid email address.");
    }

    // Validate Message (non-empty)
    if (messageField.value.trim() === "") {
        valid = false;
        alert("Message is required.");
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission if validation fails
    }
});
