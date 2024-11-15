// Link to the API endpoint
const apiEndpoint = 'https://catfact.ninja/fact';

// Select the button and paragraph elements
const button = document.getElementById('getFactButton');
const factParagraph = document.getElementById('catFact');

// Function to fetch and display a cat fact
function getFact() {
    console.log('Button clicked! Fetching a cat fact...');
    
    // Fetch a random cat fact from the API
    fetch(apiEndpoint)
        .then(response => {
            // Check if the response is ok (status code in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.fact); // Log the fact to the console
            displayRes(data.fact);  // Display the fact in the paragraph
        })
        .catch(error => {
            console.error('There was an error with the fetch operation:', error);
            alert('Failed to fetch a cat fact. Please try again later.');
        });
}

// Function to display the fetched fact in the paragraph element
function displayRes(fact) {
    factParagraph.textContent = fact;
}

// Add event listener to the button
button.addEventListener('click', getFact);

// Automatically fetch and display a fact when the page loads
window.onload = getFact;
