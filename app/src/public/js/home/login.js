"use strict"
window.onload = function(){
const id = document.querySelector('#id'),
      pwd =document.querySelector("#password"),
 loginBtn =document.querySelector("#button");


loginBtn.addEventListener("click",login);

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
       body:JSON.stringify(req),
   })
       .then((res) => res.json())
       .then((res) => {
           if(res.success){
               location.href ="/";
           }else{
               alert(res.msg);
           }
       })
       .catch(err => console.log('에러발생'));

}
}