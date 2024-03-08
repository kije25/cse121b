/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Adam Zobrist";
let currentYear = 2024;
let profilePicture = 'images\\upworkProfilePicture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favFoods = ['Ham','Cake','Scrambled Eggs','Steak',];

foodElement.innerHTML = `${favFoods}`;

let newFood = 'Sugar Cookies';

favFoods.push(newFood);

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods}`;

