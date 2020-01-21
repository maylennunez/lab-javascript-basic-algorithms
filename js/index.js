// Iteration 1: Names and Input


    let hacker1="Maylen";
    let hacker2="May";
    console.log(hacker1);
    console.log(hacker2)
}
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + XX + " characters!.");
    
    
// Iteration 3: Loops
let nameSpace = "";
 for (let i = 0; i < hacker1.length; i++) {
    nameSpace += hacker2[i].toUpperCase() + ' ';
}
let nameOrder = "";
 for (i = hacker2.length -1; i >= 0; i--) {
     nameOrder += hacker2[i];
 }
 console.log(nameOrder);
 

 if (hacker1 > hacker2) {
     console.log('The driver´s name goes first')
 } else if (hacker1 < hacker2) {
     console.log('The navigator goes first definitely')
 } else {
     console.log('What?! You both got the same name?')
 }