let meinElement = document.getElementById("main");
let myNotig = document.getElementById("notig");
let myInput = document.getElementById("input");



myInput.onfocus = function(){
    myNotig.textContent = "hallo user please dont forget to write strong password";
    myInput.onblur = function (){
        myNotig.textContent = "";
        if(myInput.value.length  < 10){
            myNotig.textContent = 'sorry your password most be at least 10 character'
        }
    } 
}
 // onkeyup//  wird es zeigt was man schriebt
myInput.onkeyup = function () {
  myNotig.textContent = this.value;
};

// ----------onclick mit dem button


let myTest = document.getElementById("test");
myBuutom = document.querySelector("button")

// Lösung One

// myBuutom.onclick = function (){
//     myTest.style.background = "#fff",
//     myTest.style.width = "30%",
//     myTest.style.textAlign = center
// }

//lösung Tow
 function  changeMy(){
    myTest.style.color = "#ffff";
};


// ---------------- Images hohlen---------------

// document.images [0].src = "https://www.w3schools.com/";
// document.images[0].alt ="Welkommen";
// document.images[0].title ="Berlin Alex";
// document.images[0].id ="Parent";
// document.images[0].className ="parentClass";








let mylinks = document.querySelector(".link");
// getAttribute holt den class oder id usw
console.log(mylinks.getAttribute("class"));
console.log(mylinks.getAttribute("href"));

// setAttribute fügt den Attribute zu  
console.log(mylinks.setAttribute("class","mein"));
mylinks.setAttribute("href","https://www.w3schools.com/");
mylinks.setAttribute("title","testTow");
mylinks.setAttribute("id","idTow"); // or
// mylinks.id = 'id-testThree'