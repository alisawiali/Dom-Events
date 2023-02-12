let myMain = document.querySelector(".container");
let myB = document.querySelector("button");

// function one (){
//     console.log( "hallo Deutschland");
// }

// function tow (){
//     console.log( "hallo Berlin zusammen");
//     document.body.style.backgroundColor = "blue";
//     myB.style.backgroundColor = "red";
//     myMain.style.borderRadius = "20px"

// }

// myB.addEventListener("click", one);
// myB.addEventListener("click", tow);

myB.onclick = function () {
  let test = myB.cloneNode(true);
    test.classList = "Alisawi";
  document.body.appendChild(test);
};


document.addEventListener("click", function (e){
    if(e.target.classList === "test"){
        console.log( "i'm Kopie");
        
    }
});

