const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images=["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg" , "pic5.jpg"]

/* Declaring the alternative text for each image file */
const imageAltText = {
    'pic1.jpg': 'closeup of an eyeball.',
    'pic2.jpg': 'White swirls.',
    'pic3.jpg': 'flowers',
    'pic4.jpg': 'egygptian cave.',
    'pic5.jpg': 'Butterfly.'
  };
  

/* Looping through images */
for(const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `${image}`);
    newImage.setAttribute('alt', imageAltText[image]);

    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', `${image}`);
        displayedImage.setAttribute('alt', imageAltText[image]);
    });

    thumbBar.appendChild(newImage)
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    // Check the current class of the button
    if (btn.getAttribute("class") === "dark") {
        // If the class is 'dark', change to 'light'
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";  // Change button text to "Lighten"
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";  // Darken the overlay
    } else {
        // If the class is not 'dark', change back to 'dark'
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";  // Change button text to "Darken"
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";  // Lighten the overlay
    }
});
