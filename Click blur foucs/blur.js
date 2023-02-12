/*
..Dom[Class List]
-- classList
-- Length
........contains => يتضمن ==> treu,wenn das elemnt da is und wenn nicht zeigt false
------------console.log(myMain.classList.contains("imad"))  ==> false
-- add 
..... item(index) ==> غرض ===> sucht (index)item(0)usw
------console.log(myMain.classList.item("2")) ==> Amer
--remove ==> Löscht
--toggle ==> تبديل ==> fügt und löscht gleicht zeitig
wenn die name nicht findet denn fügt er sie und er es findet die löscht sie

--token  ==> رمز 
*/
/*<--------------------classList-------------------------*/

let myMain = document.getElementById("main");

console.log(typeof myMain.classList);
console.log(myMain.classList.contains("ome")); // zeit treu wenn das Elemnt da ist und false wenn nicht da ist
console.log(myMain.classList.item("0")); // item sucht mit inden (0) or (2)

myMain.onclick = function () {
  myMain.classList.add("test", "Imad"); // hier füght elemnt wie viel wir brauchen
};

myMain.onclick = function () {
  this.classList.toggle("imad"); // löschen wenn er da ist
};

/*<--------------------css Style stylesheets-------------------------*/

/*
...  removepropertyName löscht  propertyName ==> اسم الخاصية  [inline - stylesheets]
... setProperty ==>fügt- value  تعيين الملكية (propertyName ,value, priorty أولوية)
.. Append ====> bringt das enemnt oder text ganz am Ende
*/

myMain.style.color = "red";

myMain.style.cssText = "color:green; font-weight:bold; ";

myMain.style.backgroundColor = "red";
myMain.style.removeProperty("color");

document.styleSheets[0].rules[2].style.setProperty("color", "blue");

myMain.onclick = function () {
  if (myMain.backgroundColor !== "red"){
    document.body.style.setProperty("background-color", "#ffff");
    myMain.style.setProperty("color","green");
  }
}

/*<--------------------Before / After / Prepend / Append / Remove-------------------------*/

/*
 --  After ==>   myMain.after("hallo welt");
 -- Before ==>   myMain.before("hallo welt");
 -- Prepend ==> ganz in den Element Amanfag   ====> myMain.prepend("hallo welt");
 -- Append == > gazn in den Element Am Ende    myMain.append("hallo welt");
 -- Remove ==> Löschen
*/



