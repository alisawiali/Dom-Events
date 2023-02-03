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

let myParent = document.getElementById("parent");

myParent.onmouseenter  = function () {
  console.log("hallo welt");
};


window.onscroll = function (){
    console.log("scroll")
}