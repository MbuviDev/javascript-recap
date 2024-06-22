//function declaration in javascript
function greet (){
  console.log("Hello World");
}

const item = () => {
  console.log("Hello");
}

//Variable
let num = 1
const num2 = 2;

//conditionals
if(num > 1){
  console.log("number 1 is greater")
}
else{ 
  console.log("number 1 is not greater") 
}
 //ternary operator
 let result = num > 1 ? "number 1 is greater" : "number 1 is not greater";
//  let marks = subject ? "pass" : "fail";
//  console.log(marks)


 if (true){
  console.log("true")
 }
 
 // global scope
 let x = 10;
 const lemon = (x) => {
  console.log (x);
 }

 const c = () => {
  y = 5;
  console.log(y);
 }


 //Arrays
 let names = ["mbuvi" , "meshack", "mutisya"]
 //multidemensional arrays
 let cars = [ ["Porsche"] , ["Benz"] , ["Audi"] ]

//  loops
 for (let i = 0; i < 10; i++){
 console.log(i);
 }

function number () {
 for (let j = 10; j >= 0; j--){
 console.log(j);
}}
number();

 //nested loops
 for (let i = 0; i < 10; i++){
  for (let j = 0; j < 10; j++ )
    console.log(i + " " + j) 
 }

 //while loops
 let z = 0;
 while (z < 10){
  console.log (z)
 }

 //Do while
let t = 0;
do { 
  console.log(t)
  t++; 
  } while (t < 10);
  console.log (t)


//objects
let person = {
  name : "Meshack Mbuvi",
  age : 24,
  work : "Software Engineer"
}

