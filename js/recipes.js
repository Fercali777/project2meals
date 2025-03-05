let meals = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((data) => {
    if (data.meals) {
      meals = data.meals;
      console.log("Data Meals:", meals);
      showContent(meals);
    } else {
      console.log("No recipes found");
    }
  })
  .catch((error) => console.error("Error finding data:", error));

function showContent(meals) {
    
 
 
   

  
    for (let i = 0; i < meals.length; i++) {
      const button = document.createElement("button");
      button.textContent = "See preparation";
  
      const tituloRecipe = document.createElement("h1");
      const containerRecipe = document.createElement("div");
      const containerCol = document.createElement("div");
      const imgRecipe = document.createElement("img");
      const containerCol2 = document.createElement("div");
      const textType = document.createElement("h4");
      const textTypeCont = document.createElement("h5");
      const textIngredients = document.createElement("h4");
      const containerIngredients = document.createElement("div");
      // const titlePreparation = document.createElement("h4");
      // const textPreparation = document.createElement("p");
  
      tituloRecipe.textContent = meals[i].strMeal;
      containerRecipe.id = "recipe-container";
      containerRecipe.className = "row";
      containerCol.className = "col-3";
      imgRecipe.src = meals[i].strMealThumb;
      containerCol2.className = "col recipe-text";
      containerCol2.id = "recipe-text";
      textType.textContent = "Type";
      textTypeCont.textContent =
      meals[i].strCategory + ", " +
      meals[i].strArea +", " +
      meals[i].strTags;
      textIngredients.textContent = "Ingredients";
      containerIngredients.id = "containerIngredients";
      // titlePreparation.textContent = "Preparation";
      // textPreparation.textContent = idsAfterType[i].strInstructions;
  
  
      button.onclick = () => {
        window.open(`recipe.html?id=${meals[i].idMeal}`, "_self");
      };
  
      document.getElementById("contenedorRecipe").appendChild(tituloRecipe);
      document.getElementById("contenedorRecipe").appendChild(containerRecipe);
      document.getElementById("recipe-container").appendChild(containerCol);
      document.getElementById("recipe-container").appendChild(imgRecipe);
      document.getElementById("recipe-container").appendChild(containerCol2);
      document.getElementById("recipe-text").appendChild(textType);
      document.getElementById("recipe-text").appendChild(textTypeCont);
      document.getElementById("recipe-text").appendChild(textIngredients);
      document.getElementById("recipe-text").appendChild(containerIngredients);
      // document.getElementById("recipe-text").appendChild(titlePreparation);
      // document.getElementById("recipe-text").appendChild(textPreparation);
  
      containerRecipe.appendChild(containerCol);
      containerRecipe.appendChild(containerCol2);
      containerCol.appendChild(imgRecipe);
      containerCol2.appendChild(button);
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
