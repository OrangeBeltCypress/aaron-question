let i = 0
let curr = 40

const no = document.querySelector(".no")
const yes = document.querySelector(".yes")
const pic = document.querySelector(".pic")
const text = document.querySelector(".text")

const Responses = ["Are you sure?", "your unarmed", "you may want to reconcider" ]
function noClick(){
    if(i < Responses.length){
      no.innerHTML = Responses[i++]
      curr+=15
      yes.style.fontSize =  (curr) + "px"
    } 
 
 }

function yesClick(){
    pic.src = "https://lh3.googleusercontent.com/Xkmu88QwC3dLavoQ9KnKHQgf-LiR6sQZNQNb0Bf-1SMsfuX46UJHMWdadWcCUySA1wLe_GvibEKNM4sPpNmxkQ=s400" 
    yes.style.visibility="hidden"  
    no.style.visibility="hidden"
    text.style.visibility="visible"
}