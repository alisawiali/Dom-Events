


// let mainElement = document.createElement("div");
// let mytext = document.createTextNode("mein text");
// let myComent = document.createComment( "this my div")


// mainElement.className ="parent";
// mainElement.setAttribute("id","text");

// mainElement.textContent = "hallo welt in berlin ";

// mainElement.appendChild(myComent);
// document.body.appendChild(mainElement);


let myElement = document.createElement("div");
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
// document.links[0].onclick = function(e){
//     e.preventDefault();
// }
//---------------------------------------------------------->

let bot = document.getElementById("btn");
let pp = document.getElementsByTagName("p")[0];


bot.onmouseenter = function () {
    pp.textContent = "hallo welt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sed doloribus fuga, libero provident quam? Ducimus voluptates consequatur voluptatibus quam. "
}


// myInput.onkeyup = function () {
//     myNotig.textContent = this.value;
//   };

//--------------Validata Form And Prevent Default----------------->


let myElementsss = document.getElementById("imad");
let myInp = document.getElementById("omer");
let myNot = document.getElementById("tog")




    myInp.onfocus = function (){
        myNot.textContent = "pleacs not forget your password"
    }

   myInp.onblur = function (){

       if(myInp.value.length < 10){
        myNot.textContent = "pleacs not forget your massge ebeio"
       }
    }


