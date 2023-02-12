console.log("<----------DOM events------------->");
/*
.......[DOM Events];
---- Use Events On Html
---- Use Events on JS
## onclick
## oncontextmenu  ====> wenn wir auf recht cllick drücken kommt es
## onmouseenter   ====> wenn wir überfliegen kommt das Antwort
## onmouselleave  ====> wenn man hin mit dem mouse geht und denn zurück kehrt denn kommt Antort

## onload
## onscroll
## onresize

## onfocus
## onblur
## onsubmit

*/




let userInput = document.querySelector("[name = 'userName']");
let ageInput = document.querySelector("[name = 'age']");

document.links[0].onclick = function (test) {
  test.preventDefault();
};

document.forms[0].onsubmit = function (e) {

  let userValid = false;
  let ageValid = false;



  if(userInput.value !== "" &&  userInput.value.length <= 10){
    userValid = true;
  };

  if(ageInput.value !== ""){
    ageValid = true;
  }


  if (userValid === false || ageValid === false) {
    e.preventDefault(); // stopt der absender
  }
};

// scroll -------------------get und set Attribute---------------------------->

// let mylinks = document.querySelector(".link");

// console.log(mylinks.getAttribute("class"));
// console.log(mylinks.getAttribute("href"));


// console.log(mylinks.setAttribute("class","mein"));
// mylinks.setAttribute("href","https://www.w3schools.com/");
// console.log(mylinks.setAttribute("title","testTow"));
// console.log(mylinks.setAttribute("id","idTow"));

// ----------------------beispiel------------------------------------>

let btns = document.getElementById("btn");
onscroll = function () {
  if (scrollY >= 400) {
    btns.style.display = "block";
    btns.style.background = "bisque";
  } else {
    btns.style.display = "none";
  }
};

btns.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",

  });
};




