let meinElement = document.getElementById("main");
let myNotig = document.getElementById("notig");
let myInput = document.getElementById("input");

// myInput.onfocus = function () {
//   myNotig.textContent = " please dont  forget your name is min 5 world";

//   myInput.onblur = function () {
//     myNotig.textContent = "";
//     if (myInput.value.length < 5) {
//       myNotig.textContent = "sorry your name mous up  5 word";
  
//     }
//   };

//   // onkeyup
// };
// myInput.onkeyup = function () {
//   myNotig.textContent = this.value;
// };

myInput.onfocus = function(){
    myNotig.textContent = "hallo user please dont forget to write strong password";
    myInput.onblur = function (){
        myNotig.textContent = "";
        if(myInput.value.length  < 10){
            myNotig.textContent = 'sorry your password most be at least 10 character'
        }
    } 
}

myInput.onkeyup = function () {
  myNotig.textContent = this.value;
};
