
const herosElement = document.getElementById('heros');

let heroList = [];


function doubleFilter(hero) {
	if (hero.biography.publisher != 'Marvel Comics') and (hero.biography.publisher != 'DC Comics')
	{return true}
}



const displayHeros = (heros) => {
	heros.forEach(hero => {
		let article = document.createElement('article');
        let h3 = document.createElement('h3');
		let h4 = document.createElement('h4');
		let img = document.createElement('img');
		h3.textContent = `${hero.name} AKA ${hero.biography.aliases[0]}` ;
		h4.textContent = hero.biography.publisher;
		img.setAttribute('src', hero.images.xs);
		
		article.appendChild(h3);
		article.appendChild(img);
        article.appendChild(h4);
		
		herosElement.appendChild(article);
	})
}



const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '636a6bf714msh5ca87d436cdf268p1a92f2jsn3b194b6c3290',
		'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
	}
};

const getHeros = async function() {
    try {
	    const response = await fetch(url, options);
	    heroList = await response.json();
	    console.log(heroList)
		displayHeros(heroList)
        
    } catch (error) {
    	console.error(error);
    }
}

function reset() {
	while(herosElement.firstChild) {
        herosElement.removeChild(herosElement.firstChild);
    };
		
	};
    
const filterHeros = function(heros) {
	reset();
		
	let filter = document.querySelector('#filtered').value;
switch (filter) {
	case 'marvel':
		displayHeros(heros.filter(hero => hero.biography.publisher == 'Marvel Comics'));
		
		break;
	case 'dc':
		displayHeros(heros.filter(hero => hero.biography.publisher == 'DC Comics'));
		break;
	case 'other':
		displayHeros(heros.filter(hero => {return hero.biography.publisher != 'Marvel Comics' && hero.biography.publisher != 'DC Comics'}));
		break;
	case 'all':
		displayHeros(heros);
		
		break;
}


}

document.querySelector("#filtered").addEventListener("change", () => { filterHeros(heroList) });


getHeros();



