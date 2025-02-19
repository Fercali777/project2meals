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




// }

for (let i = 0 ; i < meals.length ; i++){
    console.log ("im looping");
    const tituloRecipe = document.createElement("h1");

    tituloRecipe.textContent = meals[i].strMeal;

    document.getElementById("contenedorRecipe").appendChild(tituloRecipe);
}

    // // 1. Crear el elemento <h1>
    // const titulo = document.createElement("h1");

    // // 2. Añadir texto al <h1>
    // titulo.textContent = meals[1].strMeal;

    // // 3. Insertarlo en el contenedor con id="contenedor"
    // document.getElementById("contenedor1").appendChild(titulo);


    // Insertar texto en un contenedor
    // document.getElementById("javaH1").textContent = meals[1].strMeal;

