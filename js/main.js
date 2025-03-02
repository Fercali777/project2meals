let idsGloval = [];


const vegRecipe = meals.filter((cat) => cat.strCategory == "Vegetarian");
console.log("vegRecipe", vegRecipe);
const omnRecipe = meals.filter((cat) => cat.strCategory !== "Vegetarian");

// Radios-------------------------------------------------------------------------------------

const radioVeg = document.getElementById("radioVegetarian");
const radioNonVeg = document.getElementById("radioOmnivore");



let idVeg = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let idOmn = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
  if (radioVeg.checked) {
    meals.forEach((recepi, indice) => {
      if (recepi.strCategory === "Vegetarian") {
        idsGloval.push(recepi.idMeal);// IDs pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
      else {
        console.log("No Veg recipes found");
      }
    });
    console.log("recepi.idMeal NEW!!!", idsGloval);
  }
  if (radioNonVeg.checked) {
    meals.forEach((recepi, indice) => {
      if (recepi.strCategory !== "Vegetarian") {
        idsGloval.push(recepi.idMeal);// IDs pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
      else {
        console.log("No Omn recipes found");
      }
    });
    console.log("recepi.idMeal NEW!!!", idsGloval);
  }


// Selec country-------------------------------------------------------------------------------------



const idCountry = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const select = document.querySelector("#selectCountry");
// function runCheckCountry() {
   meals.forEach((recepi, indice) => {
    if (recepi.strArea === select.value) {
      idsGloval.push(recepi.idMeal);
      console.log ("ID Country New!!", idCountry)
    }
    else {
      console.log("No countries found");
    }
  });
// };



// Select Type--------------------------------------------------------------------------------
let typeSelected = [];

const idType = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("seleccionados type!!!", typeSelected);


// function runCheckType (){


      const selected = [
        ...document.querySelectorAll('input[name="type"]:checked'),
      ].map((checkbox) => checkbox.value);
      typeSelected = selected;
      console.log("typeSelected", typeSelected);

      const foundTypes = meals.filter((meal) =>
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
          idsGloval.push(recepi.idMeal); 
          
        });
      } else {
        console.log("No types found");
      }
      console.log("idGoval!!!!", idsGloval);

// }

 } //end function runSerch

// document.querySelectorAll(".checkBoxType").forEach((checkbox) => {
//   checkbox.addEventListener("change", (event) => {
//     if (event.target.checked) {
//       const selected = [
//         ...document.querySelectorAll('input[name="type"]:checked'),
//       ].map((checkbox) => checkbox.value);
//       typeSelected = selected; // Muestra en consola el array con los valores seleccionados
//       console.log("typeSelected", typeSelected);

//       const foundTypes = meals.filter((meal) =>
//         typeSelected.some(
//           (type) =>
//             meal.strCategory.toLowerCase().includes(type.toLowerCase()) ||
//             (meal.strTags &&
//               meal.strTags.toLowerCase().includes(type.toLowerCase())) ||
//             meal.strMeal.toLowerCase().includes(type.toLowerCase())
//         )
//       );

//       if (foundTypes.length > 0) {
//         console.log("Types found!!!", foundTypes);

//         foundTypes.forEach((recepi, indice) => {
//           idType.push(recepi.idMeal); // Guarda el índice si es par
//           console.log("idType!!!!", idType);
//         });
//       } else {
//         console.log("No types found");
//       }
//     }
//   });
// });



// Button-------------------------------------------------------------------------------------
const buttonSearch = document.getElementById("buttonSearchRecipe");
buttonSearch.addEventListener("click", loadAllRecipes);

const buttonSearch2 = document.getElementById("buttonSearchRecipe2");
buttonSearch2.addEventListener("click", runCheck);

// Show final array by index------------------------------------------------------------------

// Functions----------------------------------------------------------------------------------
function loadAllRecipes() {
  

  console.log("Final Arrey!!!", finalArrey);
  console.log("Meals!!!", meals);
  console.log("arrayCountryAndVeg!!!", arrayCountryAndVeg);

  contenedorRecipe.innerHTML = "";

  for (let i = 0; i < meals.length; i++) {
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
    textTypeCont.textContent = meals[i].strCategory + ", " + meals[i].strArea;
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

// Function find words in arrays ---------------------------------------------------------
// function findSelected() {
//   const foundTypes = meals.filter(meal =>
//     typeSelected.some(type =>
//       (meal.strCategory.toLowerCase().includes(type.toLowerCase()) ||
//       (meal.strTags && meal.strTags.toLowerCase().includes(type.toLowerCase())) ||
//       meal.strMeal.toLowerCase().includes(type.toLowerCase()))
//     )
//   );

//   if (foundTypes.length > 0) {
//     console.log("Types found!!!", foundTypes);

//     foundTypes.forEach((recepi, indice) => {
//       idType.push(recepi.idMeal); // Guarda el índice si es par
//       console.log ("idType!!!!", idType);
//    });

//   } else {
//     console.log("No types found");
//   }
// }
