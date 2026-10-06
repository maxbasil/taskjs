
/*1. Count Even and Odd Numbers
Write a Javascript program to print all numbers from 1 to and count how many are even and how many are odd.
Example:
Input: 10
output:
even Count: 5
Odd Count : 5*/
let n=10,even=0,odd=0;for(let i=1;i<=n;i++){console.log(i);i%2===0?even++:odd++;}console.log("Even Count:",even,"Odd Count:",odd);


/*2. Number Pattern
Write a Javascript program to print the following pattern using nested loops.
1
12
123
1234
12345*/
for(let i=1;i<=5;i++){let s="";for(let j=1;j<=i;j++)s+=j+" ";console.log(s);}


/*3. Largest Digit
Write a function largestigit(num) that returns the largest digit in the given number.*/
function largestigit(num){return Math.max(...String(Math.abs(num)).split("").map(Number));}

//4. Write a function to print the cube of every number from 1 to N.
function cubes(n){for(let i=1;i<=n;i++)console.log(i**3);}

//5. Find the sum of factorials from 1 to N.
function sumFactorials(n){let f=1,s=0;for(let i=1;i<=n;i++){f*=i;s+=f;}return s;}

//6. Find the next prime number after a given number.
function nextPrime(n){let p=n+1;while(![...Array(p-2)].some((_,i)=>p%(i+2)===0))return p;p++;}

//7. Write a function to calculate Area of a Rectangle.
function area(length,width){return length*width;}

//8. Write a function to print all numbers from 1 to 100 that are divisible by 3 or 5, but not by 15.
function numbers(){for(let i=1;i<=100;i++)if((i%3===0||i%5===0)&&i%15!==0)console.log(i);}

/*9. Temperature Converter
Create a function convertTemperature (value, choice):
Using switch:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius*/
function convertTemperature(value,choice){switch(choice){case 1:return (value*9/5)+32;case 2:return (value-32)*5/9;default:return "Invalid choice";}}




/*10. Electricity BIll Calculator
Create a function calculateBill (units) that calculates electricity charges:
First 100 units - *5/unit
Next 109 units *7/unit
Above 200 units - ₹10/unit
Return the total bill amount.*/
function calculateBill(u){return u<=100?u*5:u<=200?100*5+(u-100)*7:100*5+100*7+(u-200)*10;}