


 console.log("<-------------------Traversing  عبور--------------------------------------__>");





/*  _____ DOM [Traversing]_______
.. nextSibling  ==>  التالي
.. previousSibling ==>  الشقيق السابق
.. nextElementSibling ==>  العنصر التالي ===> console.log(towElement.nextElementSibling);
                            console.log(towElement.nextElementSibling.remove());
                            console.log(towElement.nextElementSibling.classList.toggle("Omer"));
. previousElementSibling ==>  سابق شقيق العنصر
.. parentElement ==>  الوالدين
*/  

let towElement = document.querySelector(".tow");
let threeElement = document.querySelector(".three");


console.log(towElement.previousElementSibling.classList.add("Imad"));

console.log(towElement.parentElement.classList.add("Ali")) // ===> section  ---parentElement ==>  الوالدين
console.log (towElement.parentElement.classList.contains("Ali"))


towElement.onclick = function (){
   if(towElement.classList.length !== 2 ){

    if(towElement.classList === "three"){
      threeElement.style.color = "red";
    }else if(towElement.classList !== "thr"){
        towElement.style.color = "#fff";
        towElement.style.background = "red";
        towElement.style.borderRadius = "20px"
        document.body.style.backgroundColor = "blue";
        towElement.style.opacity = "0.4";
        // towElement.style.padding = "10px";
        towElement.innerHTML = "<p>hallo welt in Berlin</p>";
    }
    //classList.contains("imad") 
   }else if(towElement.previousElementSibling.classList.contains("one") ){
        towElement.parentElement.style.margin = "40px";
        towElement.parentElement.style.color = "#fff";
        towElement.parentElement.textContent = "Plecse change youer Password";
        document.body.style.backgroundColor = "#1a1a1a";
        
   }
}


console.log("<-------------------cloneNode(true)-------------------------------------__>");
/*
---cloneNode(true) ===> zeigt die Element und dir chlidern auch im code und 
   flase es wäre denn zeigt es nur die Elemnte
*/ 


let sectionOne = document.querySelector("section").cloneNode(true);
let myDiv = document.querySelector("div");


myDiv.appendChild(sectionOne)

sectionOne.classList= "Almasuri";
sectionOne.setAttribute ("id", "imadAlisawi");
sectionOne.classList.add("Alla")
console.log(myDiv)



let id = document.getElementById("imadAlisawi");

