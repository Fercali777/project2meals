let finalArrey = meals;

const vegRecipe = meals.filter(cat => cat.strCategory == "Vegetarian");
console.log ("vegRecipe pr!", vegRecipe);
const omnRecipe = meals.filter(cat => cat.strCategory !== "Vegetarian");

// Radios-------------------------------------------------------------------------------------
const radioVeg = document.getElementById('radioVegetarian');
const radioNonVeg = document.getElementById('radioOmnivore');

function handleRadioChange(selectedRecipe) {
  finalArrey = [...selectedRecipe]; // Clona el array seleccionado
  console.log("Final array result:", finalArrey);
}
// Asignar la misma función a ambos radios
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

// Propose 2! -------------------------------------------------------------------------------



const indicesVeg = [];
meals.forEach((recepi, indice) => {
  if (recepi.strCategory === "Vegetarian") {
    indicesVeg.push(indice); // Guarda el índice si es par
  }
});
console.log("indices veg NEW:", indicesVeg);




// radioVeg.addEventListener('change', () => {
//   if (radioVeg.checked) {
//     finalArrey = [];
//     finalArrey = [...vegRecipe];
//     console.log("Vegetariano seleccionado:", meals);
//     console.log ("Final arrey Veg Result!!", finalArrey);
//   }
// });



// Ejemplo .filter --------------------------------------------------------------------------------

// const seeVegFiltered =  meals.filter((Category, i, arrey) => {
//   // console.log ("meals pr!", meals);
//   // console.log ("arrey pr!", arrey);
//   // console.log ("meal pr!", Category);
//   // console.log ("i pr!", i);
//   return meals.strCategory === "Vegetarian";
// });
// console.log ("seeVegFiltered", seeVegFiltered);



// Ejemplo .filter con condicional -------------------------------------------------------
// meals.filter((mealPr, i, arrey) => {
//   console.log ("meals pr!", meals);
//   console.log ("arrey pr!", arrey);
//   console.log ("meal pr!", mealPr);
//   console.log ("i pr!", i);
//   // retorna true para mantener el elemento en el nuevo array
// });

// Ejemplo .filter 2---------------------------------------------------------------------
// const productos = [
//   { nombre: "Pizza", disponible: true },
//   { nombre: "Hamburguesa", disponible: false },
//   { nombre: "Ensalada", disponible: true }
// ];
// const disponibles = productos.filter(producto => producto.disponible);
// console.log("Disponibles", disponibles);



// Example create array and filter with foreach ----------------------------------------------
// let vegRecipe = [];
// meals.forEach(cat => {
//   if (cat.strCategory === "Vegetarian") {
//     vegRecipe = [...vegRecipe, cat]; // Se crea un nuevo array en cada iteración
//   }
// });


// Example make an array with strend ----------------------------------------------------
// const countries = [
//   { name: 'Bolivia', landlocked: true },
//   { name: 'Chile', landlocked: false },
//   { name: 'Paraguay', landlocked: true },
//   { name: 'Perú', landlocked: false },
// ];
// let isLandlocked = true; // Supongamos que el usuario marcó "mostrar sin salida al mar"
// let landlockedCountries = [];
// countries.forEach(country => {
//   if (country.landlocked === isLandlocked) {
//     landlockedCountries = [...landlockedCountries, country];
//   }
// });
// console.log(landlockedCountries);
// // Salida: [{ name: 'Bolivia', landlocked: true }, { name: 'Paraguay', landlocked: true }]

// Example cosntruction content --------------------------------------------------------------

// // 1. Crear el elemento <h1>
// const titulo = document.createElement("h1");
// // 2. Añadir texto al <h1>
// titulo.textContent = meals[1].strMeal;
// // 3. Insertarlo en el contenedor con id="contenedor"
// document.getElementById("contenedor1").appendChild(titulo);
// Insertar texto en un contenedor
// document.getElementById("javaH1").textContent = meals[1].strMeal;
    
// Example cosntruction img --------------------------------------------------------------  

// // 1. Crear el elemento <img>
// const imagen = document.createElement("img");

// // 2. Asignar la fuente de la imagen
// imagen.src = "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"; // Imagen de prueba

// // 3. Añadir atributos adicionales
// imagen.alt = "Imagen de ejemplo";
// imagen.width = 300; // Ancho de 300px

// // 4. Insertar la imagen en el div con id="contenedor"
// document.getElementById("contenedorRecipe").appendChild(imagen);

// find index! -------------------------------------------------------------------------------

// const indicesVeg = [];
// meals.forEach((recepi, indice) => {
//   if (recepi.strCategory === "Vegetarian") {
//     indicesVeg.push(indice); // Guarda el índice si es par
//   }
// });
// console.log("!!!!indices veg NEW:", indicesVeg);


// Event listener ----------------------------------------------------------------------------------
// document.getElementById("checkButton").addEventListener("click", () => {
//   const selected = Array.from(
//     document.querySelectorAll(".checkBoxType:checked")
//   ).map((checkbox) => checkbox.value);
//   console.log("Seleccionados:", selected);
// });

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


// Compleate code for app sum IDs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let idsGloval = [];
// const vegRecipe = meals.filter((cat) => cat.strCategory == "Vegetarian");
// const omnRecipe = meals.filter((cat) => cat.strCategory !== "Vegetarian");

// // Radios-------------------------------------------------------------------------------------

// const radioVeg = document.getElementById("radioVegetarian");
// const radioNonVeg = document.getElementById("radioOmnivore");
// let idVeg = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let idOmn = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const checkbox = document.querySelector("radioVeg");

// // generate and draw Countries menu -------------------------------------
// const countries = meals.map((country) => country.strArea);
// const menuCountry = document.getElementById("selectCountry");
// const setAndSortCountries = [...new Set(countries)].sort();

// setAndSortCountries.forEach((country) => {
//   const opcion = document.createElement("option");
//   opcion.value = country;
//   opcion.textContent = `${country}`;
//   selectCountry.appendChild(opcion);
// });

// function runCheck() {
//   if (radioVeg.checked) {
//     meals.forEach((recepi, indice) => {
//       if (recepi.strCategory === "Vegetarian") {
//         idsGloval.push(recepi.idMeal);// IDs pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//         console.log ("Meals veg filtered", idsGloval);
//       }
//       else {
//         console.log("No Veg recipes found");
//       }
//     });
//     console.log("recepi.idMeal NEW!!!", idsGloval);
//   }
//   if (radioNonVeg.checked) {
//     meals.forEach((recepi, indice) => {
//       if (recepi.strCategory !== "Vegetarian") {
//         idsGloval.push(recepi.idMeal);// IDs pusch>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       }
//       else {
//         console.log("No Omn recipes found");
//       }
//     });
//     console.log("recepi.idMeal NEW!!!", idsGloval);
//   }



// // Selec country-------------------------------------------------------------------------------------



// const idCountry = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const select = document.querySelector("#selectCountry");
// // function runCheckCountry() {
//    meals.forEach((recepi, indice) => {
//     if (recepi.strArea === select.value) {
//       idsGloval.push(recepi.idMeal);
//       console.log ("ID Country New!!", idCountry)
//     }
//     else {
//       console.log("No countries found");
//     }
//   });
// // };



// // Select Type--------------------------------------------------------------------------------
// let typeSelected = [];

// const idType = []; // IDs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// console.log("seleccionados type!!!", typeSelected);


// // function runCheckType (){


//       const selected = [
//         ...document.querySelectorAll('input[name="type"]:checked'),
//       ].map((checkbox) => checkbox.value);
//       typeSelected = selected;
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
//         foundTypes.forEach((recepi, indice) => {
//           idsGloval.push(recepi.idMeal); 
          
//         });
//       } else {
//         console.log("No types found");
//       }
//       console.log("idGoval!!!!", idsGloval);

// // }

//  } //end function runSerch

// // Button-------------------------------------------------------------------------------------
// const buttonSearch = document.getElementById("buttonSearchRecipe");
// buttonSearch.addEventListener("click", loadAllRecipes);

// const buttonSearch2 = document.getElementById("buttonSearchRecipe2");
// buttonSearch2.addEventListener("click", runCheck);

// // Show final array by index------------------------------------------------------------------

// // Functions----------------------------------------------------------------------------------
// function loadAllRecipes() {

//   console.log("Meals!!!", meals);
//   console.log("arrayCountryAndVeg!!!", arrayCountryAndVeg);

//   contenedorRecipe.innerHTML = "";

//   for (let i = 0; i < meals.length; i++) {
//     const tituloRecipe = document.createElement("h1");
//     const containerRecipe = document.createElement("div");
//     const containerCol = document.createElement("div");
//     const imgRecipe = document.createElement("img");
//     const containerCol2 = document.createElement("div");
//     const textType = document.createElement("h4");
//     const textTypeCont = document.createElement("h5");
//     const textIngredients = document.createElement("h4");
//     const containerIngredients = document.createElement("div");
//     const titlePreparation = document.createElement("h4");
//     const textPreparation = document.createElement("p");

//     tituloRecipe.textContent = meals[i].strMeal;
//     containerRecipe.id = "recipe-container";
//     containerRecipe.className = "row";
//     containerCol.className = "col-3";
//     imgRecipe.src = meals[i].strMealThumb;
//     containerCol2.className = "col recipe-text";
//     containerCol2.id = "recipe-text";
//     textType.textContent = "Type";
//     textTypeCont.textContent = meals[i].strCategory + ", " + meals[i].strArea;
//     textIngredients.textContent = "Ingredients";
//     containerIngredients.id = "containerIngredients";
//     titlePreparation.textContent = "Preparation";
//     textPreparation.textContent = meals[i].strInstructions;
//     // containerRecipe.textContent = "Here the text";

//     document.getElementById("contenedorRecipe").appendChild(tituloRecipe);
//     document.getElementById("contenedorRecipe").appendChild(containerRecipe);
//     document.getElementById("recipe-container").appendChild(containerCol);
//     document.getElementById("recipe-container").appendChild(imgRecipe);
//     document.getElementById("recipe-container").appendChild(containerCol2);
//     document.getElementById("recipe-text").appendChild(textType);
//     document.getElementById("recipe-text").appendChild(textTypeCont);
//     document.getElementById("recipe-text").appendChild(textIngredients);
//     document.getElementById("recipe-text").appendChild(containerIngredients);
//     document.getElementById("recipe-text").appendChild(titlePreparation);
//     document.getElementById("recipe-text").appendChild(textPreparation);

//     containerRecipe.appendChild(containerCol);
//     containerRecipe.appendChild(containerCol2);
//     containerCol.appendChild(imgRecipe);
//     // containerCol2.appendChild(textType);

//     // Ingredients table -----------------------------------------------------------------------
//     const meal = meals[0];
//     const ingredients = [0];
//     const measures = [];

//     for (let i = 1; i <= ingredients.length; i++) {
//       const ingredient = meal[`strIngredient${i}`];
//       const measure = meal[`strMeasure${i}`];

//       if (ingredient && ingredient !== "") {
//         ingredients.push(ingredient);
//         measures.push(measure);
//       }
//       // console.log ("Ingredients.length", ingredients.length);

//       if (i == 1) {
//         const triT = document.createElement("tr");
//         const thi1 = document.createElement("th");
//         const thi2 = document.createElement("th");
//         thi1.textContent = "Ingredient";
//         thi2.textContent = "Measure";
//         triT.appendChild(thi1);
//         triT.appendChild(thi2);

//         containerIngredients.appendChild(triT);
//       }

//       const tri = document.createElement("tr");
//       const tdi1 = document.createElement("td");
//       const tdi2 = document.createElement("td");

//       tdi1.innerHTML = ingredient;
//       tdi2.innerHTML = measure;

//       tri.appendChild(tdi1);
//       tri.appendChild(tdi2);

//       containerIngredients.appendChild(tri);
//     } // end ingredients table loop
//   } // end recipes loop
// }



