const ptags = document.querySelectorAll("p")
const arrayOfPtags = Array.from(ptags)
arrayOfPtags.map((tag) => {
  console.log('tag :>> ', tag);
})
console.log('ptags :>> ', ptags);

const ptags2 = document.getElementsByTagName("p")
console.log('ptags2 :>> ', ptags2);
// ptags2.forEach(tag => {
//     console.log('tag :>> ', tag);
// });


const p3 = document.createElement("p")
p3.innerHTML = "four"
document.querySelector("body").appendChild(p3)

console.log('ptags :>> ', ptags);

console.log('ptags2 :>> ', ptags2);

// const arrayNums = [1,2,3]

// console.log('arrayNums :>> ', arrayNums
// );

// const myCar = {name:"ford"}
// console.log('myCar :>> ', myCar);
// console.log('myCar.length :>> ', myCar.length);

// var myString 
// console.log('myString :>> ', myString);