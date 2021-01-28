var petName = "Cinnamon";
var yourName;
var x = 10;
var y = 30;
sum = x + y;

console.log(petName);  //just testing a variable string using console.log



yourName = prompt("What is your Name?");

if (yourName == null) {
    alert("You have not entered a name. ");
}
else {
    document.write("It's nice to meet you " + yourName + ".");
}





/*if (yourName != null) {
    document.write("Nice to meet you " + yourName + ".");
}




/*<button type="button" onclick="document.write("Hmmm...maybe the website needs to be refreshed")">Try it</button>
this is a different way of using the document.write function.  if click everything goes away and what is in the parenthesis is printed on the site-*/