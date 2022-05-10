const navOpenBtn = document.querySelector("#btnOpen");
const navCloseBtn = document.querySelector("#btnClose");
const navElem = document.querySelector("nav");
let closeNavBar = document.querySelectorAll(".navbarTwo-link");




for(i = 0; i < closeNavBar.length; i++ ){
    closeNavBar[i].addEventListener('click', function (){
        navElem.classList.add("hide")
        document.getElementById("btnOpen").style.visibility = "visible";
       
    });
}

navOpenBtn.addEventListener('click', function(){
    navElem.classList.remove("hide")
 document.getElementById("btnOpen").style.visibility = "hidden";

})

navCloseBtn.addEventListener("click", function(){
    navElem.classList.add("hide")
    document.getElementById("btnOpen").style.visibility = "visible";

})




