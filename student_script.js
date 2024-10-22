document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var errorMessages = document.getElementById("errorMessages");

    let errors = [];

    if (username === "") {
        errors.push("Username cannot be empty.");
    }

    var emailRegex = /^[a-z A-Z 0-9 ._%+-]+@[a-z A-Z 0-9 .-]{3,}\.[a-z A-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errors.push("Phone number must be 10 digits and contain only numbers.");
    }

    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (&,$,#@).");
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join("<br>");
    } else {
        errorMessages.innerHTML = "Registration successful!";
    }
});
