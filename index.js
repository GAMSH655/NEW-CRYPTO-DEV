const menuBTn= document.querySelector("#menuBtn");
const cancel = document.querySelector("#cancelBTn");
const header = document.querySelector(".Mobileheader");
console.log(menuBTn , cancel)

menuBTn.addEventListener("click" , function(){
    header.style.display = "block"
});
cancel.addEventListener("click" , function(){
    header.style.display = "none"
});

const accordion = document.getElementsByClassName("contentBox");

for (let i=0 ;  i < accordion.length ; i++){
  accordion[i].addEventListener("click",function(){
 this.classList.toggle("active");
  })
}