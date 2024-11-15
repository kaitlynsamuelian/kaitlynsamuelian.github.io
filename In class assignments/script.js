// Link API endpoint: // Add a new variable that holds the API endpoint
const apiEndpoint = 'https://catfact.ninja/fact';


const button = document.getElementById('getFactButton');
const factParagraph = document.getElementById('catFact');


function getFact() {// function declaration,& button clicked checked by a message in the console 
    console.log('Button clicked! Fetching cat fact...');
    
    // Fetch a random cat fact from the API
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
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

// "displayRes" : displays the text of a fetched quote in the paragraph made earlier
function displayRes(fact) {
    factParagraph.textContent = fact;
}

// Add event listener to the button
button.addEventListener('click', getFact);

window.onload = getFact;
