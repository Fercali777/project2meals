


// const meal = meals[0]; // Tomamos el primer (y único) objeto de meals
// const ingredients = [];

// for (let i = 1; i <= 20; i++) {
//   const ingredient = meal[`strIngredient${i}`]; 
//   if (ingredient && ingredient.trim() !== "") { 
//     ingredients.push(ingredient);
//   }
// }
// console.log(ingredients);



// for (let i = 0 ; i < numberUping ; i++){
//   if (meals[1].strIngredient(i) == ("")){
//     console.log (Lopping!!);

//   }

// }



// Ingredients table
const meal = meals[0]; 
const ingredients = [];
const measures = [];

for (let i = 1; i <= 20; i++) {
  const ingredient = meal[`strIngredient${i}`]; 
  const measure = meal[`strMeasure${i}`]; 
  if (ingredient && ingredient !== "") { 
    ingredients.push(ingredient);
    measures.push(measure)
  }

const tri = document.createElement("tr")
const tdi1 = document.createElement("td")
const tdi2 = document.createElement("td")

tdi1.innerHTML = ingredient
tdi2.innerHTML = measure
tri.appendChild(tdi1)
tri.appendChild(tdi2)
tbody.appendChild(tri)
}
console.log(ingredients);
console.log(measures);
// Ingredients table









// table from spike
// const tbody = document.getElementById("tbody");
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




// Call only one row -------------------------------------------------
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