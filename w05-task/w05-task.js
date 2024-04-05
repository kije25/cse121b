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
            
            
            
           
                
            
            
            break;
        
        case 'notutah':




            break;

        case 'older':

            break;
        case 'all':
            
            getTemples(temples);
            break;
        }}
    






/* Event Listener */

    
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });








getTemples(templeList);