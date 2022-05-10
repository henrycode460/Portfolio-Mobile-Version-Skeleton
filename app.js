const navOpenBtn = document.querySelector("#btnOpen");
const navCloseBtn = document.querySelector("#btnClose");
const navElem = document.querySelector("nav");

navOpenBtn.addEventListener('click', function(){
    navElem.classList.remove("hide")
 document.getElementById("btnOpen").style.visibility = "hidden";

})

navCloseBtn.addEventListener("click", function(){
    navElem.classList.add("hide")
    document.getElementById("btnOpen").style.visibility = "visible";

})