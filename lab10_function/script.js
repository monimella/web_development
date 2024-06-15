/**
 * student's full name
 * June 15, function and object
 */
console.log("Monique Lawrence")
//function to print a something
function msg(){
    console.log("Hello World!")
}
//function to print numbers between 1 and 3, inclusive 
function printcount(){
    for (let x=1; x<=3; x++){
        console.log(x)
    }
}

//function that passes a name as argument
function greeting(firstname){
    console.log(`Welcome to JavaScript ${firstname}`)
}


//function that passes multiple arguments

function fullname (firstname, lastname){
console.log(`Welcome to JS ${firstname} ${lastname[0]}`)
}

//lastname[0] to print the first character of lastname
}

let firstname="Monique"
let lastname="Lawrence"

fullname(firstname, lastname)

//function without parameters but returns a value
function sumxy(){
    let x = 10
    let y = -2
    return x+y
    //any lines after the first return will not be executed
    x = x+2
    y = y+5
    return x+y


}
// calling sum(
let s = sum(5,10)
console.log(`The sum is ${s}`)

//function check if a number is positive
function checkpositive(number){
    if (number>0){
        return true
    }
    else{
        return false
    }
}
//call the function
let n=2
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)

//save function in variable
/*
function addition(num1, num2){
return num1+num2
}
*/
const addition=function(num1, num2){
    return num1+num2
}

/*
//regular variable function

return num1*num2
}
*/
//arrow function
const product = (num1,num2)=>{return num1*num2}

//Anonymous function
(
    function(){
        console.log("This is an anonymous function")
    }
)();


//OBJECT
/*real-world objects all around us, and they each have attributes and behavior that can be described
- attributes describe the features that an object has.
-behaviors that describe actions that an object can perform.
*/
//car is the object
let car={
    //attributes (properties)
    make:"Jeep"
    year:2021,
    model:"Wrangler",
    startmileage :10,

    //behaviors (methods, function)
    accelerate : function(){return this. model },
    brake: function(){return this.make }
    distancetravel: function(){return this.endmileage - this.startmileage}

}
//add a method 'start' to the car object'
car.start=function(){
    return`${this.make} ${this.model} is running`
}

// add a property 'price'
car.price = 32000