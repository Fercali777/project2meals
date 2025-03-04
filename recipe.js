let meals = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((data) => {
    if (data.meals) {
      meals = data.meals;
      console.log("Data Meals:", meals);
      mostrarReceta(meals);
    } else {
      console.log("No se encontraron recetas.");
    }
  })
  .catch((error) => console.error("Error al obtener los datos:", error));
let indice = [];
function mostrarReceta(meals) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id"); // Obtenemos el índice desde la URL
  console.log("ID recibido:", id);

  meals.forEach((recepi, ind) => {
    if (recepi.idMeal == id) {
      indice = ind;
      console.log("Find Recipe!!", recepi.idMeal, ind);
    }
  });

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

  tituloRecipe.textContent = meals[indice].strMeal;
  containerRecipe.id = "recipe-container";
  containerRecipe.className = "row";
  containerCol.className = "col-3";
  imgRecipe.src = meals[indice].strMealThumb;
  containerCol2.className = "col recipe-text";
  containerCol2.id = "recipe-text";
  textType.textContent = "Type";
  textTypeCont.textContent =
    meals[indice].strCategory + ", " + meals[indice].strArea + ", " + meals[indice].strTags;
  textIngredients.textContent = "Ingredients";
  containerIngredients.id = "containerIngredients";
  titlePreparation.textContent = "Preparation";
  textPreparation.textContent = meals[indice].strInstructions;
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
}
