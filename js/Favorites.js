
const fav = document.getElementById("9alb");
const container=document.getElementById("movies-container")
     export function activebtn(){
const active =document.getElementById("active")
active.addEventListener("click",(e)=>{
  e.preventDefault()
  active.classList.toggle("text-green-700");
    active.classList.toggle("text-red-700");

});
return active
}
fav.addEventListener("click",(e)=>{
e.stopPropagation();
    fav.classList.toggle("text-red-700")
    fav.classList.toggle("text-white")
})

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];















localStorage.setItem("favoris", JSON.stringify(favoris));
