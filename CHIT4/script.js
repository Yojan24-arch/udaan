document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
   
    // Get form data
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value
    };
    // Send data to server using AJAX POST method
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/register", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
    if (xhr.status === 200) {
    console.log("Registration successful");
    window.location.href = "/users";
    } else {
    console.error("Registration failed");
    }
    };
    xhr.send(JSON.stringify(formData));
   });