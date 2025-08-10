// Q1: Ask name and say hello
let name = prompt("What is your name?");
alert("Hello " + name);
// Pehle prompt se user ka naam liya. 
// Fir alert se usko "Hello" ke saath show kiya.
// Example: agar user "Affan" likhe to alert me "Hello Affan" aayega.


// Q2: Ask number, if > 10 say big
let number = prompt("Enter a number:");
if (number > 10) {
    alert("Number is big");
}
// Prompt number le raha hai (string form me aata hai, lekin JS compare kar deta hai).
// Agar number 10 se bara ho to "Number is big" dikhata hai.
// Warna kuch nahi hota.


// Q3: Add 25 in total 50
let total = 50;
total = total + 25;
alert(total);
// Pehle total variable me 50 rakha.
// Usme 25 add kiya aur naya value alert me dikhaya.
// Output hamesha 75 aayega.


// Q4: Ask color and show message
let color = prompt("Your favorite color?");
alert("Wow! " + color + " is nice!");
// Prompt user ka favorite color poochta hai.
// Fir alert me "Wow!" ke saath color ka naam dikhata hai.


// Q5: Check age for vote
let age = prompt("Enter age:");
if (age >= 18) {
    alert("You can vote");
}
// Prompt se user ki age li.
// Agar age 18 ya usse zyada hai to "You can vote" ka message aata hai.
// Agar 18 se kam ho to kuch nahi hota.


// Q6: Two numbers sum
let a = Number(prompt("First number:"));
let b = Number(prompt("Second number:"));
alert(a + b);
// Dono numbers prompt se liye.
// Number() ka use kiya taake string ko number me convert kare.
// Fir dono ka sum alert me dikhaya.


// Q7: Yes or no check
let ans = prompt("Type yes or no:");
if (ans === "yes") {
    alert("Great!");
}
// Agar user ne exactly "yes" likha to "Great!" ka message aata hai.
// Agar kuch aur likha to kuch nahi hota.


// Q8: Password check
let pass = prompt("Enter password:");
if (pass === "12345") {
    alert("Access OK");
}
// Prompt se password liya.
// Agar exactly "12345" hai to access ok ka message aata hai.


// Q9: Check equal numbers
let x = prompt("First number:");
let y = prompt("Second number:");
if (x === y) {
    alert("Both same");
}
// Prompt se do numbers liye (string form me).
// Agar dono same hain to "Both same" ka message aata hai.


// Q10: Show my name
let myName = "Affan";
alert(myName);
// Variable myName me apna naam store kiya.
// Fir alert me dikhaya.


// Q11: Hot day check
let temp = prompt("Enter temperature:");
if (temp > 30) {
    alert("Hot day");
}
// Prompt se temperature liya.
// Agar temp 30 se bara hai to "Hot day" ka message aata hai.


// Q12: Hello World join
let text = "Hello" + " " + "World";
alert(text);
// "Hello" aur "World" ko space ke saath + operator se joda.
// Alert me "Hello World" dikhaya.


// Q13: Even number check
let num = prompt("Enter a number:");
if (num % 2 === 0) {
    alert("Even");
}
// % (modulus) operator remainder check karta hai.
// Agar remainder 0 hai to number even hota hai.


// Q14: City check
let city = prompt("Enter city:");
if (city === "Karachi") {
    alert("Welcome to lights city");
}
// Prompt me city ka naam liya.
// Agar user ne "Karachi" likha to welcome ka message aata hai.


// Q15: Pass or Fail
let marks = prompt("Enter marks:");
if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
}
// Prompt se marks liye.
// Agar marks 50 ya zyada hai to pass ka message.
// Warna fail ka message.

//TOTAL 1 HOURS ASSIGMENT DONE JS SECONED ASSIGMENT

