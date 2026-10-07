// QUESTIONS
const prompt=require('prompt-sync') ({sigint:true})

// 1. Count Even and Odd Numbers
// Write a Javascript program to print all numbers from 1 to and count how many are even and how many are odd.
// Example:
// Input: 10
// output:
// even Count: 5
// Odd Count : 5

let n= Number(prompt("Enter a number:"))
 let even=0
 let odd=0

 for (let i=1;i<=n;i++){
     if(i%2 ===0){
         even++;
     }
     else{
         odd++
    }
 }

 console.log(`Even:${even}`);
 console.log(`Odd:${odd}`);




// 2. Number Pattern
// Write a Javascript program to print the following pattern using nested loops.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

 for(let i=1;i<=5;i++){
     let pattern=" "

    for(let j=1;j<=i;j++){
         pattern+= j+" "
     }
    console.log(pattern);
    
 }


// 3. Largest Digit
// Write a function largestigit(num) that returns the largest digit in the given number.

function largestDigit(num) {

    num = Math.abs(num);

    let largest = 0;

    while (num > 0) {

        let digit = num % 10;

        if (digit > largest) {
            largest = digit;
        }

        num = Math.floor(num / 10);
    }

    return largest;
}

let no = Number(prompt("Enter a number:"));

console.log("Largest digit:", largestDigit(no));

// 4. Write a function to print the cube of every number from 1 to N.

 function cubes(n){

     for(let i=1;i<=n;i++){
         console.log(i+"cube=", i* i* i);
        
    }
 }

 let nu = Number(prompt("Enter a number:"))

 cubes(nu)


// 5. Find the sum of factorials from 1 to N.

 function factorials(n){

    let factorial = 1
    let sum = 0

     for(let i=1;i<=n;i++){

       factorial = factorial * i
         sum = sum + factorial
    }
     return sum

 }

 let nb = Number(prompt("Enter a number:"));

 console.log("Sum of factorials:", factorials(nb));


// 6. Find the next prime number after a given number.

 function isPrime(num) {

     if (num < 2) {
         return false;
     }

     for (let i = 2; i < num; i++) {

       if (num % i === 0) {
             return false;
         }

     }

     return true;
 }


 function nextPrime(num) {

    num++;

    while (!isPrime(num)) {
         num++;
     }

     return num;
 }

 let nob = Number(prompt("Enter a number:"));

console.log("Next prime number:", nextPrime(nob));


// 7. Write a function to calculate Area of a Rectangle.

 function areaOfRectangle(length, width) {

     return length * width;

 }

 let length = Number(prompt("Enter length:"));
 let width = Number(prompt("Enter width:"));

 console.log("Area of Rectangle:", areaOfRectangle(length, width));


// 8. Write a function to print all numbers from 1 to 100 that are divisible by 3 or 5, but not by 15.

 function printNumbers() {

    for (let i = 1; i <= 100; i++) {

         if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) {
           console.log(i);
         }
     }

}

 printNumbers();


// 9. Temperature Converter
// Create a function convertTemperature (value, choice):
// Using switch:
// 1. Celsius to Fahrenheit
// 2. Fahrenheit to Celsius

function convertTemperature(value, choice) {

    switch (choice) {

        case 1:
            return (value * 9 / 5) + 32;

        case 2:
            return (value - 32) * 5 / 9;

        default:
            return "Invalid choice";
    }
}

let value = Number(prompt("Enter temperature:"));

let choice = Number(prompt(
    "Enter choice:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius"
));

console.log("Result:", convertTemperature(value, choice));

// 10. Electricity BIll Calculator
// Create a function calculateBill(units) that calculates electricity charges:
// First 100 units - 75/unit
// Next 109 units - 77/unit
// Above 200 units - 710/unit
// Return the total bill amount.

function calculateBill(units) {

    let bill = 0;

    if (units <= 100) {

        bill = units * 5;

    }
    else if (units <= 200) {

        bill = (100 * 5) + ((units - 100) * 7);

    }
    else {

        bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);

    }

    return bill;
}

let units = Number(prompt("Enter electricity units:"));

console.log("Total bill:", calculateBill(units));