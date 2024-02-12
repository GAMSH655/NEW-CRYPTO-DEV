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
