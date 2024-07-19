// console.log("hello!");

// let div = document.querySelector("div");
// console.dir(div);


//Practice 1:
/* let h2 = document.querySelector("h2");
   console.dir(h2.innerText);
   h2.innerText = h2.innerText + " from Narula students";
*/


//Practice 2:
/*
let divs = document.querySelectorAll(".box");

let idx=1;
for (div of divs){
    div.innerText = `new unique value ${idx} `;
    idx++;
}*/

// let div = document.querySelector("div");
// // console.log(div);

// // let classes = div.getAttribute("class");
// // console.log(classes);
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

//Dom manipulation

// let newBtn=document.createElement("button");
// newBtn.innerText = "Click Me";

// let div= document.querySelector("div");
// div.append(newBtn);

/*Practice 1:

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
//inline Css
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
let pos = document.querySelector("body");
pos.prepend(newBtn);*/

// /*Event in JS*/
// let btn1 =document.querySelector("#btn1");

// // btn1.onclick = (evt) =>{
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     // console.log("button was Clicked");
// //     // let a=10;
// //     // a++;
// //     // console.log(a);
// // }
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked");
// });
// const  handler2= ()=>{
//     console.log("button was clicked handler-2");
// };

// btn1.addEventListener("click",handler2);
// btn1.removeEventListener("click",handler2);

// let box =document.querySelector("div");

// box.onmouseover = () =>
//     {
//         console.log("You are inside the Div");
//     }

/*Practice*/

let modeBtn = document.querySelector("#mode");

let currMode ="light";//dark
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>
{
   if(currMode === "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        
        body.classList.remove("light");

    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});
