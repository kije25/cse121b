/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Adam",
    photo: "..\\w02-task\\images\\upworkProfilePicture.jpg",
    favoriteFoods: ['Ham','Cake','Scrambled Eggs','Steak'],
    hobbies: ['Gaming', 'Reading', 'Youtube'],
    placesLived: [],

};


/* Populate Profile Object with placesLive objects */

// This occurs outside of the object definition.
myProfile.placesLived.push(
    {place: "Rexburg",
     length: '3 years'},
    {place:'Henderson',
     length: '22 years'}
     );
  



/* DOM Manipulation - Output */



/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});
/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
myProfile.placesLived.forEach(place => {
    
    
    
});