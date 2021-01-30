var petName = "Cinnamon";
var yourName;
var x = 10;
var y = 30;
var sum = x + y;
var guess;
var guessSum;



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

/*The prompt response is stored as a string value and can't be used for math equations.  It returns the value NaN. Unless it is changed by using parseInt*/
guess = prompt("For a better experience, please enter a number.");
guess = parseInt(guess);
console.log(guess);



if (isNaN(guess)){
    alert("That is not a number.");
    guess = prompt("Please enter a number.");
    guess = parseInt(guess);
    console.log(guess);
}
else{
    guessSum = guess + x;
    document.getElementById('guessSum').innerHTML = ("The sum of your number, " + guess + " , plus 10 is " + guessSum + " .");
}



if (guess == 7){
    document.write("Wow! Seven is my favorite number.");
    document.write("This is a test message.");
}
else {
    document.write("I'm going to guess that the number you entered is... " + guess + " .");
    document.write("This is a test message.");
}


/*if ((guess === null) || (guess === "")){
    document.write("Hmmm...I guess that you didn't want to enter a number.  Too many prompts?");
    document.write("This is a test message.");
}*/