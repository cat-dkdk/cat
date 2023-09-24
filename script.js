document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const generateButton = document.getElementById("generateButton");
  
    // Add click event listener to the button
    generateButton.addEventListener("click", function() {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
          const imageUrl = data[0].url;
          
          // Create an img element
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Random Cat";
          
          // Remove old image if exists
          const oldImage = document.querySelector("#catContainer img");
          if (oldImage) {
            oldImage.remove();
          }
  
          // Append the new image to the container
          const catContainer = document.getElementById("catContainer");
          catContainer.appendChild(imgElement);
        })
        .catch(error => console.error("Something went wrong:", error));
    });
  });