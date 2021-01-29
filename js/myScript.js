var petName = "Cinnamon";
var yourName;
var x = 10;
var y = 30;
var sum = x + y;
var guess;



console.log(petName);  //just testing a variable string using console.log

yourName = prompt("What is your Name?");
console.log(yourName);

if (yourName === null) {
    alert("You haven't entered a name.");
}
else if (yourName === ""){
    alert("You haven't entered a name.");
}
else {
    document.getElementById('welcome').innerHTML=("Hello, " + yourName + " .");
}

guess = prompt("Please enter a number.");
console.log(guess);
document.write("I'm going to guess that your number is... " + guess + " .");







/*<button type="button" onclick="document.write("Hmmm...maybe the website needs to be refreshed")">Try it</button>
this is a different way of using the document.write function.  if click everything goes away and what is in the parenthesis is printed on the site-*/