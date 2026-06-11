let person ={
    firstName : "John",
    lastName :  "kendy",
    age  : 50,
    weight : 54,
}
/*
//Accessing object properties using
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person.age);
console.log(person.weight);

//Adding new properties to an object
person.height =5.5;
console.log(person.height);

person.gender = "nale";
console.log(person.gender);

//Updating existing properties of an object

person.firstName = "gopi";
console.log(person.firstName);

person.lastName = "krishna";
console.log(person.lastName);

person.age = 25;
console.log(person.age);

person.weight = 55;
console.log(person.weight);

person.height = 5.4;
console.log(person.height);

person.gender = "male";
console.log(person.gender);

//updateing existing properties
person.weight =56;
console.log(person.weight);


//deleting properties 
delete person.weight;
//console.log(person.weight); 
*/





//for in loop in object for rading all the properties of an object

for(let y in person){
   // console.log(y); //only property name
   // console.log(person[y]); //property value
    console.log(y +":\t"+ person[y]); //property name and value


}

let employee = {
    ename : "madhu",
    email : "email@gmail.com",
    ejob : "Engineer",
    baseSalary : 50000,
    bonus : function(){
        return((this.baseSalary*10)/100);
    }
}
console.log("The salary increment is : " + employee.bonus());