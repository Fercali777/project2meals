console.log("this is the data", data);

// table from spike
const tbody = document.getElementById("tbody")
for (let i = 0; i < data.length; i++) {
  const tr = document.createElement("tr")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")

  td1.innerHTML = data[i].name.official
  if (data[i].capital && data[i].capital.length >= 1) {
    td2.innerHTML = data[i].capital[0]
  }
  else {
    td2.innerHTML = "no capital"
  }
  td3.innerHTML = data[i].population

  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)

  tbody.appendChild(tr)
}

// container withs flags
const container = document.getElementById("container");
container.setAttribute("style", "display: flex; flex-flow: row wrap; gap: 1em");
for (let i = 0; i < data.length; i++) {

  const div = document.createElement("div");
  div.setAttribute("style", "text-align: center; padding: 1em; border: solid 1px black");
  container.appendChild(div);
  const h3 = document.createElement("h3");
  h3.innerHTML = data[i].name.common;
  const img = document.createElement("img");
  img.setAttribute("src", data[i].flags.png);
  img.setAttribute("alt", "Flag for " + data[i].name.common);
  div.append(img, h3);
}