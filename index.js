//lecture 19
//dom - events and more selectors


//iventi aris ai magalitad klikis dros rom rame knas

// const button = document.querySelector(".button")   //gadaveci meore parametrad callback funqcia usaxelo anu anonimuri
// button.addEventListener("click", function (){
//    alert ("hello") 
// })


//gvkondes sami prompti pirvelshi width meore height da mesame backround color da gachndes is firma 
//da feri rasac promptshi shevkvant 


// function openAlert() {
// const main_container = document.querySelector (".main")
//     const box_container = document.createElement ("div");
//     main_container.appendChild(box_container);
//     const prompt_width = prompt ("enteer contaienr width");
//     const prompt_height = prompt ("enteer contaienr height");
//     const prompt_backgroundColor = prompt ("enteer contaienr backgroundColor");

//     box_container.style.width = `${prompt_width}px`;
//     box_container.style.height = `${prompt_height}px`;
//     box_container.style.backgroundColor = `${prompt_backgroundColor}`;

// }

// openAlert ();




//gilakis klikze shevcvalot mag feri


// const button = document.querySelector(".button") 
// const card = document.querySelector (".card")

// button.addEventListener ("click", () =>{
//  card.style.backgroundColor = 'blue'

// })
// addEventListener ()



// const button = document.querySelector(".button") 
// const card = document.querySelector (".card")

// button.addEventListener("click", () => {
//     let isLogedin = false;
//     if (!isLogedin) {
//         //  //saitis darefresheba 
//         //  window.location.reload()
//     } else {
//         alert ("you are regisstered")
//     }

// })



 const button = document.querySelector (".button")
 const input = document.querySelector (".input")
 const card = document.querySelector (".card")


 button.addEventListener ("click" ,() =>  {
 console.log (`value: ${input.value}`);
 card.innerHTML = `<h1>${input.value}</h1>`
 }) 

//   let isLogedin = false;
//  let fname = document.getElementById("fname");
//  let email = document.getElementById("email");
//  let pass = document.getElementById("pass");
//  let submit = document.getElementById("submit");
//  let result = document.getElementById("result");

//  if (!isLogedin) {
//    submit.addEventListener("click", () => {
//      result.innerHTML = `<li>${fname.value}</li><li>${email.value}</li><li>${pass.value}</li>`;
//      setTimeout(() => {
//        alert("You are already Registered!");
//      }, 1000);
//         });
//  }else{
//      alert("you are not registered!!")
//  }

 const firstName = document.getElementById("firstName");
 const email = document.getElementById("email");
 const password = document.getElementById("password");
 const submit = document.getElementById("button");

 submit.addEventListener("click", () => {
   let isLogedin = false;
   if (!isLogedin) {
     const container = document.querySelector(".container");
     const user_info = document.createElement("div");
     const ul = document.createElement("ul");
     const li = document.createElement("li");
     ul.appendChild(li);
     user_info.appendChild(ul);
     container.appendChild(user_info);
     li.innerHTML = `username: ${firstName.value},<br/> email: ${email.value},,<br/> password: ${password.value}`;
   } else {
     alert("you registered succesfull!!");
   }
    });