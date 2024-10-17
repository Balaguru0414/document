document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display the input values in the output section
    document.getElementById("outputName").innerHTML = name;
    document.getElementById("outputEmail").innerHTML = email;
    document.getElementById("outputMessage").innerHTML = message;

    // Show the output container
    document.querySelector(".output-container").style.display = "block";
  });
