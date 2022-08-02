"use strict"

const id = document.querySelector('#id'),
      pwd =document.querySelector("#password"),
      btn =document.querySelector("#btn");


btn.addEventListener("click",login);

function login() {
    const req ={
        id:id.value,
        pwd:pwd.value,

    };
   fetch("/login",{
       method:"POST",
       headers:{
           "Content-Type":"application/json",
       },
       body:JSON.stringify(req)
   })
}