function fetchComic() {
    // Generate a random comic number between 1 and 3024 (the current highest comic number)
    const randomComicNumber = Math.floor(Math.random() * 3024) + 1;
    
    // Fetch the random comic directly by constructing the URL inline
    fetch(`https://api.allorigins.win/raw?url=https://xkcd.com/${randomComicNumber}/info.0.json`)
        .then(response => response.json()) 
        .then(data => {
            console.log(data); // Check if data is correct in the console
            document.getElementById("comicTitle").textContent = data.title;
            document.getElementById("comicImage").src = data.img;
            document.getElementById("comicAltText").textContent = data.alt;
            document.getElementById("comicDate").textContent = `${data.month}/${data.day}/${data.year}`;
        })
        .catch(error => {
            console.error("Error fetching comic:", error);
        });
}

// Call the function when the button is clicked
document.getElementById("fetchComic").addEventListener("click", fetchComic);

