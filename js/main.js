// table from spike
const tbody = document.getElementById("tbody")
for (let i = 0; i < meals.length; i++) {
  const tr = document.createElement("tr")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")
  const td4 = document.createElement("td")
  const td5 = document.createElement("td")
  const td6 = document.createElement("td")
  const td7 = document.createElement("td")


  td1.innerHTML = meals[i].idMeal
  td2.innerHTML = meals[i].strMeal
  td3.innerHTML = meals[i].strCategory
  td4.innerHTML = meals[i].strArea
  td5.innerHTML = meals[i].strTags
  td6.innerHTML = meals[i].strIngredient1
  td7.innerHTML = meals[i].strInstructions


 

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)
  tr.appendChild(td5)
  tr.appendChild(td6)
  tr.appendChild(td7)

  tbody.appendChild(tr)
}