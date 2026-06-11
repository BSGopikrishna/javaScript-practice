
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];
console.log(fruits);

//console.log(fruits[5]);

//let myarray =[100,"wlcome",true,45.67,null,undefined];
//console.log(myarray);

let person1 = {
    name : "ram",
    age : 30,
    city : "bangalore"
}

let person2 = {
    name : "divaid",
    age : 32,
}

let myarray =[person1, person2];
console.log(myarray);

//let myarray =[100,"wlcome",true,45.67,null,undefined];
//read the array elements using for loop
for(let i = 0; i <= myarray.length-1; i++){
 
   console.log(myarray[i]);
}
 console.log();

//read the array elements using for of loop
for(let x of myarray){
    console.log(x);
}

console.log(typeof myarray);
console.log(Array.isArray(myarray));
