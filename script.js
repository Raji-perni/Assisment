document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
  
    // Log form data (for demonstration purposes)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Construct the data to send to the server
    const dataToSend = {
      name: name,
      email: email,
      message: message,
    };
  
    // Send the data to the server using Fetch API
    fetch("https://example.com/submit_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server (if needed)
        console.log("Server Response:", data);
        // Display a success message to the user (optional)
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
        // Display an error message to the user (optional)
        alert("Error submitting the form. Please try again later.");
      });
  });
  