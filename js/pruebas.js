
// meals.filter((mealPr, i, arrey) => {
//   console.log ("meals pr!", meals);
//   console.log ("arrey pr!", arrey);
//   console.log ("meal pr!", mealPr);
//   console.log ("i pr!", i);
//   // retorna true para mantener el elemento en el nuevo array
// });


const productos = [
  { nombre: "Pizza", disponible: true },
  { nombre: "Hamburguesa", disponible: false },
  { nombre: "Ensalada", disponible: true }
];
const disponibles = productos.filter(producto => producto.disponible);
console.log("Disponibles", disponibles);





const vegRecipe = meals.filter(cat => cat.strCategory == "Vegetarian");

console.log ("vegRecipe pr!", vegRecipe);




// meals.filter((mealPr, i, arrey) => {
  

  // strCategory: "Vegetarian"
  // console.log ("arrey pr!", arrey);
  // console.log ("meal pr!", mealPr);
  // console.log ("i pr!", i);

// });



const checkboxVeg = document.getElementById('vegetarian');

checkboxVeg.addEventListener('change', () => {
  if (checkboxVeg.checked) {
    console.log ("vegRecipe pr!", vegRecipe);;
  } else {
    console.log('El checkbox no está marcado (false)');
  }
});




const buttonSearch  = document.getElementById("buttonSearchRecipe")
buttonSearch.addEventListener ("click", loadAllRecipes)

function loadAllRecipes () {
  console.log ("button clicked");


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
console.log ("Ingredients.length", ingredients.length);  

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

    // // 1. Crear el elemento <h1>
    // const titulo = document.createElement("h1");

    // // 2. Añadir texto al <h1>
    // titulo.textContent = meals[1].strMeal;

    // // 3. Insertarlo en el contenedor con id="contenedor"
    // document.getElementById("contenedor1").appendChild(titulo);


    // Insertar texto en un contenedor
    // document.getElementById("javaH1").textContent = meals[1].strMeal;


        // // 1. Crear el elemento <img>
        // const imagen = document.createElement("img");

        // // 2. Asignar la fuente de la imagen
        // imagen.src = "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"; // Imagen de prueba
    
        // // 3. Añadir atributos adicionales
        // imagen.alt = "Imagen de ejemplo";
        // imagen.width = 300; // Ancho de 300px
    
        // // 4. Insertar la imagen en el div con id="contenedor"
        // document.getElementById("contenedorRecipe").appendChild(imagen);

