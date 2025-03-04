
const vegRecipe = meals.filter((cat) => cat.strCategory == "Vegetarian");
const omnRecipe = meals.filter((cat) => cat.strCategory !== "Vegetarian");

let idsGloval = meals;
let idsAfterCountry = []; 
let idsAfterType = [];

// Radios-------------------------------------------------------------------------------------

const radioVeg = document.getElementById("radioVegetarian");
const radioNonVeg = document.getElementById("radioOmnivore");

const checkbox = document.querySelector("radioVeg");

// generate and draw Countries menu -------------------------------------
const countries = meals.map((country) => country.strArea);
const menuCountry = document.getElementById("selectCountry");
const setAndSortCountries = [...new Set(countries)].sort();

setAndSortCountries.forEach((country) => {
  const opcion = document.createElement("option");
  opcion.value = country;
  opcion.textContent = `${country}`;
  selectCountry.appendChild(opcion);
});

function runCheck() {

    idVeg = []; 
    idOmn = []; 
    idsGloval = [];
    idsAfterCountry = []; 
    idsAfterType = [];


  if (radioVeg.checked) {
    meals.forEach((recepi, indice) => {
      if (recepi.strCategory === "Vegetarian") {
        idsGloval.push(recepi); // pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
    });
    console.log ("Meals veg filtered", idsGloval);
  }
  if (radioNonVeg.checked) {
    meals.forEach((recepi, indice) => {
      if (recepi.strCategory !== "Vegetarian") {
        idsGloval.push(recepi); // pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
      
      else {
        console.log("No Omn recipes found");
      }
    });
    console.log ("Meals NonVeg filtered!!!!!!!!!!!", idsGloval);
  }

  if (!radioVeg.checked && !radioNonVeg.checked) {
    idsGloval = meals;
    console.log("recepi.idMeal NEW!!!!!", idsGloval);
  }



// Selec country-------------------------------------------------------------------------------------


const select = document.querySelector("#selectCountry");
// function runCheckCountry() {
   idsGloval.forEach((recepi, indice) => {
    if (recepi.strArea === select.value) {
      idsAfterCountry.push(recepi); 
    }
  });
  if (select.value === "" || select.value === "Seleccione..." || select.value == null) {
    console.log("No countries found", select.value);
    idsAfterCountry = idsGloval;
  }

  console.log ("ID Country", idsAfterCountry)

// };



// Select Type--------------------------------------------------------------------------------


const idType = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//  function runCheckType(){

  const selected = [
    ...document.querySelectorAll('input[name="type"]:checked'),
  ].map((checkbox) => checkbox.value);
  typeSelected = selected;
  console.log("typeSelected", typeSelected);

  const foundTypes = idsAfterCountry.filter((meal) =>
    typeSelected.some(
      (type) =>
        meal.strCategory.toLowerCase().includes(type.toLowerCase()) ||
        (meal.strTags &&
          meal.strTags.toLowerCase().includes(type.toLowerCase())) ||
          meal.strMeal.toLowerCase().includes(type.toLowerCase())
    )
  );

  if (foundTypes.length > 0) {
    foundTypes.forEach((recepi, indice) => {
      idsAfterType.push(recepi); 
    });
  } else {
    console.log("No types found");
    idsAfterType = idsAfterCountry;
  }
  console.log("idsAfterType!!!!", idsAfterType);
// }

loadAllRecipes () ;


 } //end function runSerch





// Button-------------------------------------------------------------------------------------
const buttonSearch = document.getElementById("buttonSearchRecipe");
buttonSearch.addEventListener("click", runCheck); 
// runCheck


printNoResoultsFound


// Show final array by index------------------------------------------------------------------

// Functions----------------------------------------------------------------------------------
function loadAllRecipes() {



  contenedorRecipe.innerHTML = "";

  for (let i = 0; i < idsAfterType.length; i++) {
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

    tituloRecipe.textContent = idsAfterType[i].strMeal;
    containerRecipe.id = "recipe-container";
    containerRecipe.className = "row";
    containerCol.className = "col-3";
    imgRecipe.src = idsAfterType[i].strMealThumb;
    containerCol2.className = "col recipe-text";
    containerCol2.id = "recipe-text";
    textType.textContent = "Type";
    textTypeCont.textContent = idsAfterType[i].strCategory + ", " + idsAfterType[i].strArea  + ", " + idsAfterType[i].strTags;
    textIngredients.textContent = "Ingredients";
    containerIngredients.id = "containerIngredients";
    titlePreparation.textContent = "Preparation";
    textPreparation.textContent = idsAfterType[i].strInstructions;
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

    for (let i = 1; i <= ingredients.length; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient !== "") {
        ingredients.push(ingredient);
        measures.push(measure);
      }
      // console.log ("Ingredients.length", ingredients.length);

      if (i == 1) {
        const triT = document.createElement("tr");
        const thi1 = document.createElement("th");
        const thi2 = document.createElement("th");
        thi1.textContent = "Ingredient";
        thi2.textContent = "Measure";
        triT.appendChild(thi1);
        triT.appendChild(thi2);

        containerIngredients.appendChild(triT);
      }

      const tri = document.createElement("tr");
      const tdi1 = document.createElement("td");
      const tdi2 = document.createElement("td");

      tdi1.innerHTML = ingredient;
      tdi2.innerHTML = measure;

      tri.appendChild(tdi1);
      tri.appendChild(tdi2);

      containerIngredients.appendChild(tri);
    } // end ingredients table loop
  } // end recipes loop
}


function printNoResoultsFound() {

    contenedorRecipe.innerHTML = "";

    const NoRecipesFound = document.createElement("h1");

    NoRecipesFound.textContent = "No Recipes Found";
    contenedorRecipe.appendChild(NoRecipesFound); 

    console.log ("Im doing it");

}



