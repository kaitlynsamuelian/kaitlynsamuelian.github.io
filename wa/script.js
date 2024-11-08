
function tellFortune(children, partner, location, job) {
    const fortuneText = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.getElementById('fortune').innerHTML += fortuneText + '<br>';
}


tellFortune(3, 'a profesional skiier', 'london or paris', 'fashion designer');
tellFortune(2, 'a super model', 'an island in greece', 'baker');
tellFortune(4, 'a chef', 'a magical forest', 'fairy');


function calculateDogAge(humanYears) {
    const dogYears = humanYears * 7;
    const ageText = `Your doggie is ${dogYears} years old in dog years!`;
    document.getElementById('dogAge').innerHTML += ageText + '<br>';
}

calculateDogAge(1);
calculateDogAge(9);
calculateDogAge(11);


function userDogAge() {
    const humanYears = document.getElementById('dogAgeInput').value;
    const dogYears = humanYears * 7;
    document.getElementById('userDogAge').innerHTML = `Your doggie is ${dogYears} years old in dog years!`;
}

// reverseNumber function
function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    document.getElementById('reverseNumber').innerHTML += `The reversed number of ${num} is: ${reversed}.<br>`;
}

// Call reverseNumber twice with different values
reverseNumber(32243);
reverseNumber(12345);


function alphabeticalOrder(str) {
    const sortedStr = str.split('').sort().join('');
    document.getElementById('alphabetOrder').innerHTML += `The alphabetical order of "${str}" is: "${sortedStr}".<br>`;
}


alphabeticalOrder('tennis');
alphabeticalOrder('soccer');

function capitalizeLetter(str) {
    const capitalizedStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('capitalizeWords').innerHTML += `The sentence with the 1st letter of each word capatalized: "${capitalizedStr}".<br>`;
}

capitalizeLetter('i love icecream');
capitalizeLetter('my favorite show is modern family');
