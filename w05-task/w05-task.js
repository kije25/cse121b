/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');

let templeList = [];



/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
};



/* async getTemples Function using fetch()*/
const getTemples = async (list) => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        list = await response.json();
        displayTemples(list);
    } 
};



/* reset Function */
function reset() {
    while(templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild)
    }
    
};



/* filterTemples Function */
const filterTemples = function(temples) {
    reset();
    
    let filter = document.querySelector('#filtered').value;
    switch (filter) {
        case 'utah':
            temples.filter(temple => {temple.location.includes('Utah')})

            getTemples(temples);
           
                
            
            
            break;
        
        case 'notutah':
            temples.filter(temple => { if (temple.location.includes('Utah')) {return false}})

            getTemples(temples);



            break;

        case 'older':
            temples.filter(temple => {temple.dedicated})
            /* The dedicated item in the array is a string. I have to extract the substring that is
            a number, convert it to an int, and then check if it is less than 1950. I can't even figure out
            how to get information out of the location string. */
            getTemples(temples);


            break;
        case 'all':
            
            getTemples(temples);
            break;
        }}
    






/* Event Listener */

    
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });








getTemples(templeList);