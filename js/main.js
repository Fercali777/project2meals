// table from spike
const tbody = document.getElementById("tbody")
for (let i = 0; i < meals.length; i++) {
  const tr = document.createElement("tr")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")


  td1.innerHTML = meals[i].idMeal
  td2.innerHTML = meals[i].strMeal
  td3.innerHTML = meals[i].strCategory

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)

  tbody.appendChild(tr)
}