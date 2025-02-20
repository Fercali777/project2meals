// table from spike
// const tbody = document.getElementById("tbody")
// for (let i = 0; i < meals.length; i++) {
//   const tr = document.createElement("tr")
//   const td1 = document.createElement("td")
//   const td2 = document.createElement("td")
//   const td3 = document.createElement("td")
//   const td4 = document.createElement("td")
//   const td5 = document.createElement("td")
//   const td6 = document.createElement("td")
//   const td7 = document.createElement("td")


//   td1.innerHTML = meals[i].idMeal
//   td2.innerHTML = meals[i].strMeal
//   td3.innerHTML = meals[i].strCategory
//   td4.innerHTML = meals[i].strArea
//   td5.innerHTML = meals[i].strTags
//   td6.innerHTML = meals[i].strIngredient1
//   td7.innerHTML = meals[i].strInstructions


 

//   tr.appendChild(td1)
//   tr.appendChild(td2)
//   tr.appendChild(td3)
//   tr.appendChild(td4)
//   tr.appendChild(td5)
//   tr.appendChild(td6)
//   tr.appendChild(td7)

//   tbody.appendChild(tr)
// }




// const tbody = document.getElementById("tbody")
// for (let i = 0; i < meals.length; i++) {

//   const tbody = document.getElementById("tbody") 



//   const tr = document.createElement("tr")
//   const td1 = document.createElement("td")
//   const td2 = document.createElement("td")
//   const td3 = document.createElement("td")
//   const td4 = document.createElement("td")
//   const td5 = document.createElement("td")
//   const td6 = document.createElement("td")
//   const td7 = document.createElement("td")



//   td1.innerHTML = meals[1].idMeal
//   td2.innerHTML = meals[1].strMeal
//   td3.innerHTML = meals[1].strCategory
//   td4.innerHTML = meals[1].strArea
//   td5.innerHTML = meals[1].strTags
//   td6.innerHTML = meals[1].strIngredient1
//   td7.innerHTML = meals[1].strInstructions


 

//   tr.appendChild(td1)
//   tr.appendChild(td2)
//   tr.appendChild(td3)
//   tr.appendChild(td4)
//   tr.appendChild(td5)
//   tr.appendChild(td6)
//   tr.appendChild(td7)

//   tbody.appendChild(tr)


// }

for (let i = 0 ; i < meals.length ; i++){

 

// Ingredients table
    const meal = meals[i]; 
    const ingredients = [];
    for (let i = 0; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]; 
      if (ingredient && ingredient !== "") { 
        ingredients.push(ingredient);
      }
    }
    console.log(ingredients);

// Ingredients table




    console.log ("im looping");
    const tituloRecipe = document.createElement("h1");
    const containerRecipe = document.createElement("div");
    const containerCol = document.createElement("div");
    const containerCol2 = document.createElement("div");
    const textType = document.createElement("h4");
    const textTypeCont = document.createElement("h5");
    const textIngredients = document.createElement("h4");
    const imgRecipe = document.createElement("img");

    tituloRecipe.textContent = meals[i].strMeal;
    containerRecipe.id = "recipe-container";
    containerRecipe.className = "row";
    containerCol.className = "col-3";
    containerCol2.className = "col recipe-text";
    containerCol2.id = "recipe-text";
    textType.textContent = "Type";
    textTypeCont.textContent = meals[i].strCategory + ", " + meals[i].strArea ;
    textIngredients.textContent = "Ingredients";
    // containerRecipe.textContent = "Here the text";
    imgRecipe.src = meals[i].strMealThumb;
    
    document.getElementById("contenedorRecipe").appendChild(tituloRecipe);
    document.getElementById("contenedorRecipe").appendChild(containerRecipe);
    document.getElementById("recipe-container").appendChild(containerCol);
    document.getElementById("recipe-container").appendChild(containerCol2);
    document.getElementById("recipe-container").appendChild(imgRecipe);
    document.getElementById("recipe-text").appendChild(textType);
    document.getElementById("recipe-text").appendChild(textTypeCont);
    document.getElementById("recipe-text").appendChild(textIngredients);

    containerRecipe.appendChild(containerCol);
    containerRecipe.appendChild(containerCol2);
    containerCol.appendChild(imgRecipe);
    // containerCol2.appendChild(textType);







    // recipe-container2.appendChild(div)

    // document.getElementById("javaH1").textContent = meals[1].strMeal;
    
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

