// three variables that store references to the "Enter custom name" text field (customName),
// the "Generate random story" button (randomize), and the <p> element
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
//takes an array, and returns one of the items stored inside the array at random.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
//the : are place holders because later we wil;l put the strings from the arrays ther e
//Store the first, big long, string of text inside a variable called storyText.
let storyText= "It was a beautiful summer day, so :insertx: went for a walk in the enchanted garden. However, she instead ended up at :inserty:, she stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: always gets lost!";
// Store the first set of three strings inside an array called insertX.
// Store the second set of three strings inside an array called insertY.
// Store the third set of three strings inside an array called insertZ.

const insertX= ["Tinker Bell", "Ariel", "Snow White"];
const insertY=["evil dungeon", "the nasty swamp", "the dragons cage"];
const insertZ=["turned into fairydust", "started crying","ran away"];


randomize.addEventListener('click', result);

function result() {
    let newStory= storyText;
    const xItem= randomValueFromArray(insertX);
    const yItem= randomValueFromArray(insertY);
    const zItem= randomValueFromArray(insertZ);

    newStory= newStory.replaceAll(':insertx:', xItem);
    newStory=newStory.replaceAll(':inserty:', yItem);
    newStory=newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+'stone';
    const temperature =  Math.round((94-32)*5/9)+ ' centigrade';
    newStory=newStory.replace('300 pounds', weight);
    newStory=newStory.replace('94 fahrenheit', temperature);

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}