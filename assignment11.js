// made a variable for the api, also had to use a different proxy bc the one in  the 
//announcmetn wasnt working 
const apiEndpoint = 'https://api.allorigins.win/raw?url=https://xkcd.com/';

const button = document.getElementById('fetchComic');
const comicTitle = document.getElementById('comicTitle');
const comicImage = document.getElementById('comicImage');
const comicAltText = document.getElementById('comicAltText');
const comicDate = document.getElementById('comicDate');

function fetchComic() {
    // random comic
    const randomComicNumber = Math.floor(Math.random() * 3024) + 1;
    
    console.log('Fetching comic number: ' + randomComicNumber);

    // Fetch the random comic using the API
    fetch(`${apiEndpoint}${randomComicNumber}/info.0.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();  // Parse the response as JSON
        })
        .then(data => {
            console.log(data); // Log the data to check if it's correct
            displayRes(data);  // Call displayRes function to show the comic data
        })
        .catch(error => {
            console.error('There was an error with the fetch operation:', error);
            alert('Failed to fetch the comic. Please try again later.');
        });
}

// displays the fetched comic information in the HTML elements
function displayRes(data) {
    comicTitle.textContent = data.title;  // Set the comic title
    comicImage.src = data.img;  // Set the image source
    comicAltText.textContent = data.alt;  // Set the alt text
    comicDate.textContent = `${data.month}/${data.day}/${data.year}`;  // Set the comic date
}

// event listener to the button
button.addEventListener('click', fetchComic);

// to make sure there is a comic there when the page loads
window.onload = fetchComic;
