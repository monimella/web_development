console.log("Monique Lawrence")
console.log("=====Example 1: for loop as a counter =====")
let i = 1;
for(i; i < 5; i++){
    console.log(`iteration = ${i}`)
}

console.log("=====Example 1: for loop as a  decroment counter =====")
// create a loop counter from 10 to 0 step 1

for (let n=10; n>=0; n--){
    console.log(`iteration=${n}`);
}
console.log("======Example 3: condition inside the loop======")
// check how many even numbers are in between -5 and 5
let counter = 0
for(let m= -5; m<5 ; m++){
    console.log(`iteration=${m}`)
    if (m%2 ===  m !== 0){
       counter++

    }
}
console.log(`There is/are ${counter} even numbers`)
console.log("====== Example 4: while loop as a counter======")
//display number 0 to 4
let p=0
while (p<=4){
    console.log(`iteration = ${p}`)
    p++
}
console.log("====== Example 5: while loop application ======")
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt ("Guess a number between 1 and 10")) 
while(guessnumber !==SECRET){
    guessnumber = parseInt(prompt ("Guess a number between 1 and 10"))

}
console.log(`Great! You guessed it! the number is ${SECRET}`)

console.log("====== Example 6: while loop in a list ======")
let colors =["magenta", "olive", "babyblue"]
let sizeofcolors = colors.lengthconsole
let index = 0
while (index<sizeofcolors){
    console.log(colors[index])
        index++
    
}
console.log("====== Example 5: while loop to simulate a password log-in = ======")
//terminate the loop if password fails in three attempts
const password = "peterpan"
let userpassword=prompt ("Enter a password")
let numberattempt = 0
while (userpassword!== password){
    userpassword = prompt ("Enter a password again")
    numberattempt++
    if(numberattempt>3){
        console.log("Your account is locked!")
        break
    }
    userpassword= prompt (`You have ${3-numberattempt} attempts left.Enter a password again`)
}
console.log("Have a good day!")

console.log("====== Example 8: do-while loop to simulate a withdraw from a back account ======")
//user tries to withdraw money from an account with a balance of $1000.
let withdraw = 0
let balance=1000
do{
    withdraw=parseInt (prompt("How much do you want to withdraw?"))
    if(withdraw<=balance){
        balance=balance-withdraw
    }
    else{
        console.log("Insufficient balance, try again")
    }

}while (withdraw>balance)
    console.log(`Your new balance is ${balance}`)

console.log ("====== Exercise: Simulate a bank transaction =====")
// simulate the collection of the pin number of 4 digits
//ask the user to pick a transaction: view the balance, deposit, withdraw---> flow control  if, else if, else)
//ask the user if they want another transaction.
//print result

