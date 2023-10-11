


// Grab references to the search input and the suggestions list
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// A predefined list of fruit names
const fruitold = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const fruit = ['Abiu' , 'Acai' , 'Acerola' , 'Akebi' , 'Ackee' , 'African Cherry Orange' , 'American Mayapple' , 'Apple' , 'Apricot' , 'Aratiles' , 'Araza' , 'Atis (Annona Squamosa)' , 'Avocado' , 'Banana' , 'Bilberry' , 'Blackberry' , 'Blackcurrant' , 'Black sapote' , 'Blueberry' , 'Boysenberry' , 'Breadfruit' , 'Buddha hand (fingered citron)' , 'Cacao' , 'Cactus pear' , 'Canistel - also called egg fruit' , 'Catmon' , 'Cempedak' , 'Cherimoya (Custard Apple)' , 'Cherry' , 'Chico fruit' , 'Cloudberry' , 'Coco de mer' , 'Coconut' , 'Crab apple' , 'Cranberry' , 'Currant' , 'Damson' , 'Date' , 'Dragonfruit (or Pitaya)' , 'Durian' , 'Elderberry' , 'Feijoa' , 'Fig' , 'Finger Lime (or Caviar Lime)' , 'Gac Fruit (or Baby Jackfruit )' , 'Goji berry' , 'Gooseberry' , 'Grape' , 'Raisin' , 'Grapefruit' , 'Grewia asiatica (phalsa or falsa)' , 'Guava' , 'Guyabano' , 'Hala Fruit' , 'Honeyberry' , 'Huckleberry' , 'Jabuticaba (Plinia)' , 'Jackfruit' , 'Jambul' , 'Japanese plum' , 'Jostaberry' , 'Jujube' , 'Juniper berry' , 'Kaffir Lime' , 'Kiwano (horned melon)' , 'Kiwifruit' , 'Kumquat' , 'Lanzones' , 'Lemon' , 'Lime' , 'Loganberry' , 'Longan' , 'Loquat' , 'Lulo' , 'Lychee' , 'Magellan Barberry' , 'Macopa (Wax Apple)' , 'Mamey Apple' , 'Mamey Sapote' , 'Mango' , 'Mangosteen' , 'Marionberry' , 'Medlar' , 'Melon' , 'Cantaloupe' , 'Galia melon' , 'Honeydew' , 'Mouse melon' , 'Musk melon' , 'Watermelon' , 'Miracle fruit' , 'Momordica fruit' , 'Monstera deliciosa' , 'Mulberry' , 'Nance' , 'Nectarine' , 'Orange' , 'Blood orange' , 'Clementine' , 'Mandarine' , 'Tangerine' , 'Papaya' , 'Passionfruit' , 'Pawpaw' , 'Peach' , 'Pear' , 'Persimmon' , 'Plantain' , 'Plum' , 'Prune (dried plum)' , 'Pineapple' , 'Pineberry' , 'Plumcot (or Pluot)' , 'Pomegranate' , 'Pomelo' , 'Purple mangosteen' , 'Quince' , 'Raspberry' , 'Salmonberry' , 'Rambutan (or Mamin Chino)' , 'Redcurrant' , 'Red Medlar' , 'Rose apple' , 'Salal berry' , 'Salak' , 'Santol' , 'Sampaloc' , 'Sapodilla' , 'Sapote' , 'Saquico' , 'Sarguelas (Red Mombin)' , 'Satsuma' , 'Soursop' , 'Star apple' , 'Star fruit' , 'Strawberry' , 'Surinam cherry' , 'Tamarillo' , 'Tamarind' , 'Tangelo' , 'Tayberry' , 'Tambis (Water Apple)' , 'Thimbleberry' , 'Ugli fruit' , 'White currant' , 'White sapote' , 'Ximenia' , 'Yuzu' , 'Bell pepper' , 'Carolina reaper' , 'Chile pepper' , 'Corn kernel' , 'Cucumber' , 'Eggplant (or Brinjal)' , 'Jalapeño' , 'Olive' , 'Pea' , 'Pumpkin' , 'Squash' , 'Tomato' , 'Zucchini'];
/**
 * This function searches the fruit list for matches based on a given string.
 * 
 * @param {string} str - The search term entered by the user.
 * @returns {Array} - Returns an array of fruits that match the search term.
 */

function search(str) {
   

	let results = fruit.filter((item)=> item.toLowerCase().includes(str.toLowerCase()));
    // TODO: Logic for filtering the fruit list based on the search term.

    return results;
}

/**
 * This event handler is triggered whenever the user types in the search bar.
 * It calls the search function to filter suggestions and then displays them.
 * 
 * @param {Event} e - The keyup event object.
 */
function searchHandler(e) {
	let tempResults = search(input.value);  // Pass the value of the input

    showSuggestions(tempResults, input.value);

    // TODO: Logic to handle user input and display matching suggestions.


}

/**
 * Displays the matching fruits as a dropdown list below the search bar.
 * 
 * @param {Array} results - The list of matching fruits.
 * @param {string} inputVal - The current value entered in the search bar.
 */
function showSuggestions(results, inputVal) {
    suggestions.innerHTML = ''; // Clear previous suggestions
    if (results.length === 0 || inputVal.length === 0) {
        return; // No suggestions to show
    }

    results.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(inputVal.toLowerCase());
        const indexB = b.toLowerCase().indexOf(inputVal.toLowerCase());
        return indexA - indexB;
    });

    results.forEach(result => {
        const li = document.createElement('li');
        
        // Find the start and end index of the matched portion
        const startIndex = result.toLowerCase().indexOf(inputVal.toLowerCase());
        const endIndex = startIndex + inputVal.length;

        // Split the fruit name and wrap the matched portion in a span
        const highlightedFruit = 
            result.slice(0, startIndex) + 
            `<span class="highlight">${result.slice(startIndex, endIndex)}</span>` + 
            result.slice(endIndex);

        li.innerHTML = highlightedFruit;
        suggestions.appendChild(li);
    });

    
}

/**
 * Handles the event when a user clicks on a suggestion in the dropdown.
 * It should populate the search bar with the selected fruit name.
 * 
 * @param {Event} e - The click event object.
 */
function useSuggestion(e) {
    // TODO: Logic to populate the search bar with the selected suggestion.
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = ''; // Clear suggestions after selection
    }
}

// Add an event listener for detecting when the user types in the search bar
input.addEventListener('keyup', searchHandler);

// Add an event listener for handling clicks on the suggestions dropdown
suggestions.addEventListener('click', useSuggestion);
