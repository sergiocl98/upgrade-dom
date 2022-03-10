/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

//2.1
let createdDiv = document.createElement("div");
document.body.appendChild(createdDiv);

//2.2
let createdDivP = document.createElement("div");
let createdP = document.createElement("p");
createDivWithP.appendChild(createdP);
document.body.appendChild(createdDivP);

//2.3
let createdDiv6P = document.createElement("div");
document.body.appendChild(createdDiv6P);
for (let i = 0; i < 6; i++) {
  let sixP = document.createElement("p");
  createdDiv6P.appendChild(sixP);
}


//2.4
let createdPText = document.createElement("p");
createdPText.textContent = "Soy dinámico!";
document.body.appendChild(createdPText);

//2.5
let h2Text = document.querySelector(".fn-insert-here")
h2Text.textContent = "Wubba Lubba dub dub";

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newUl = document.createElement("ul");

for (const app of apps) {
    let newLi = document.createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);

//2.7
let deletes = document.querySelectorAll(".fn-remove-me");
for (const deleted of deletes) {
    deleted.remove();
}

//2.8
let midP = document.createElement("p");
selectedDivs = document.querySelectorAll("div");
midP.textContent = "Voy en medio!";
document.body.insertBefore(midP, selectedDivs[1]);

//2.9
let divClasses = document.querySelectorAll(".fn-insert-here");
for (const divClass of divClasses) {
    let p = document.createElement("p");
    p.textContent = "Voy dentro!"
    divClass.appendChild(p);
}