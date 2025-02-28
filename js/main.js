let finalArrey = meals;
let indexCompilation = [];


const vegRecipe = meals.filter(cat => cat.strCategory == "Vegetarian");
  console.log ("vegRecipe", vegRecipe);
const omnRecipe = meals.filter(cat => cat.strCategory !== "Vegetarian");


// Radios-------------------------------------------------------------------------------------
const radioVeg = document.getElementById('radioVegetarian');
const radioNonVeg = document.getElementById('radioOmnivore');

function handleRadioChange(selectedRecipe) {
  finalArrey = [...selectedRecipe]; // Clona el array seleccionado
  console.log("Final array result:", finalArrey);
}
radioVeg.addEventListener('change', () => {
  if (radioVeg.checked) handleRadioChange(vegRecipe);
});
radioNonVeg.addEventListener('change', () => {
  if (radioNonVeg.checked) handleRadioChange(omnRecipe);
});


// Selec country-------------------------------------------------------------------------------------

const countries = finalArrey.map(country => country.strArea)
const menuCountry = document.getElementById("selectCountry");
const setAndSortCountries = [...new Set(countries)].sort();
setAndSortCountries.forEach(country => {
  const opcion = document.createElement("option");
  opcion.value = country; 
  opcion.textContent = `${country}`; 
  selectCountry.appendChild(opcion); 
});

let arrayCountryAndVeg = [];

selectCountry.addEventListener("change", (e) => {
  const selectedCountry = e.target.value;

  if (selectedCountry) {

    const arrayCountrySelected = finalArrey.filter(cat3 => cat3.strArea == selectedCountry);
    console.log ("arrayCountrySelected PRPR", arrayCountrySelected);
    arrayCountryAndVeg = arrayCountrySelected ;

  } else {
    console.log("No se seleccionó ningún país");
  }
});






// Select Type--------------------------------------------------------------------------------
let typeSelected = [];
console.log ("seleccionados type!!!", typeSelected);

document.getElementById("getSelection").addEventListener("click", function() {
      const selected = [...document.querySelectorAll('input[name="type"]:checked')]
      .map(checkbox => checkbox.value);
      typeSelected = selected;// Muestra en consola el array con los valores seleccionados
      console.log ("typeSelected", typeSelected);
      findSelected ();

});

// let types = meals.strTags();
// console.log ("types!!!", types);


function findSelected (){
const findedTypes = meals.filter(meal => typeSelected.some(type => meal.strTags.includes(type)));
  
if (findedTypes.length > 0) {
  console.log("findedTypes!!");
}
else {
    console.log("not types finded");
}
}



function findSelected (){
  const findedTypes = meals.filter(meal => typeSelected.includes(meal.strCategory));
  if (findedTypes.length > 0) {
      console.log("types finded:!!!!!", findedTypes);
  } else {
      console.log("not types finded");
  }
  }




const typeRecipe = meals.filter(cat => cat.strCategory == "Vegetarian");




// Button-------------------------------------------------------------------------------------
const buttonSearch  = document.getElementById("buttonSearchRecipe")
buttonSearch.addEventListener ("click", loadAllRecipes)



// Show final array by index------------------------------------------------------------------




// Functions----------------------------------------------------------------------------------
function loadAllRecipes () {

  meals = arrayCountryAndVeg;

  console.log ("Final Arrey!!!", finalArrey);
  console.log ("Meals!!!", meals);
  console.log ("arrayCountryAndVeg!!!", arrayCountryAndVeg);

  contenedorRecipe.innerHTML = ""

for (let i = 0 ; i < meals.length ; i++){
    const tituloRecipe = document.createElement("h1");
    const containerRecipe = document.createElement("div");
    const containerCol = document.createElement("div");
    const imgRecipe = document.createElement("img");
    const containerCol2 = document.createElement("div");
    const textType = document.createElement("h4");
    const textTypeCont = document.createElement("h5");
    const textIngredients = document.createElement("h4");
    const containerIngredients = document.createElement("div");
    const titlePreparation = document.createElement("h4");
    const textPreparation = document.createElement("p");
    
    tituloRecipe.textContent = meals[i].strMeal;
    containerRecipe.id = "recipe-container";
    containerRecipe.className = "row";
    containerCol.className = "col-3";
    imgRecipe.src = meals[i].strMealThumb;
    containerCol2.className = "col recipe-text";
    containerCol2.id = "recipe-text";
    textType.textContent = "Type";
    textTypeCont.textContent = meals[i].strCategory + ", " + meals[i].strArea ;
    textIngredients.textContent = "Ingredients";
    containerIngredients.id = "containerIngredients";
    titlePreparation.textContent = "Preparation";
    textPreparation.textContent = meals[i].strInstructions; 
    // containerRecipe.textContent = "Here the text";
    
    document.getElementById("contenedorRecipe").appendChild(tituloRecipe);
    document.getElementById("contenedorRecipe").appendChild(containerRecipe);
    document.getElementById("recipe-container").appendChild(containerCol);
    document.getElementById("recipe-container").appendChild(imgRecipe);
    document.getElementById("recipe-container").appendChild(containerCol2);
    document.getElementById("recipe-text").appendChild(textType);
    document.getElementById("recipe-text").appendChild(textTypeCont);
    document.getElementById("recipe-text").appendChild(textIngredients);
    document.getElementById("recipe-text").appendChild(containerIngredients);
    document.getElementById("recipe-text").appendChild(titlePreparation);
    document.getElementById("recipe-text").appendChild(textPreparation);
   
    containerRecipe.appendChild(containerCol);
    containerRecipe.appendChild(containerCol2);
    containerCol.appendChild(imgRecipe);
    // containerCol2.appendChild(textType);

// Ingredients table -----------------------------------------------------------------------
const meal = meals[0]; 
const ingredients = [0];
const measures = [];

for (let i = 1 ; i <= ingredients.length ; i++) {
  const ingredient = meal[`strIngredient${i}`]; 
  const measure = meal[`strMeasure${i}`]; 

  if (ingredient && ingredient !== "") { 
    ingredients.push(ingredient);
    measures.push(measure)
  }  
// console.log ("Ingredients.length", ingredients.length);  

if (i == 1){
const triT =  document.createElement("tr")
const thi1 = document.createElement("th")
const thi2 = document.createElement("th")
  thi1.textContent = "Ingredient";
  thi2.textContent = "Measure";
  triT.appendChild(thi1)
  triT.appendChild(thi2)
  
  containerIngredients.appendChild(triT)
}

const tri = document.createElement("tr")
const tdi1 = document.createElement("td")
const tdi2 = document.createElement("td")

tdi1.innerHTML = ingredient
tdi2.innerHTML = measure

tri.appendChild(tdi1)
tri.appendChild(tdi2)

containerIngredients.appendChild(tri)
} // end ingredients table loop
} // end recipes loop
}

// find index! -------------------------------------------------------------------------------

const indicesVeg = [];
meals.forEach((recepi, indice) => {
  if (recepi.strCategory === "Vegetarian") {
    indicesVeg.push(indice); // Guarda el índice si es par
  }
});
console.log("!!!!indices veg NEW:", indicesVeg);




///////////////////////////////////// Tools finded /////////////////////////////////////////////


// encontrar exactamente un elemento en comun dentro de dos array--------------------------------
// function findSelected (){
//   const findedTypes = meals.filter(meal => typeSelected.includes(meal.strCategory));
//   if (findedTypes.length > 0) {
//       console.log("types finded:!!!!!", findedTypes);
//   } else {
//       console.log("not types finded");
//   }
//   }