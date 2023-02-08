


// let mainElement = document.createElement("div");
// let mytext = document.createTextNode("mein text");
// let myComent = document.createComment( "this my div")


// mainElement.className ="parent";
// mainElement.setAttribute("id","text");

// mainElement.textContent = "hallo welt in berlin ";

// mainElement.appendChild(myComent);
// document.body.appendChild(mainElement);


let myElement= document.createElement("div");
let myHeading = document.createElement("h2");
let myPar = document.createElement("p");



let myTitle = document.createTextNode("Urlaub in Madiva");
let myText = document.createTextNode("einen schöne zeit in Maldiva ")


myHeading.appendChild(myTitle);
myPar.appendChild(myText)

myElement.appendChild(myHeading);
myElement.appendChild(myPar);



myElement.className = "Prudoct";
document.body.appendChild(myElement)



//---------------------------------------------------------->
