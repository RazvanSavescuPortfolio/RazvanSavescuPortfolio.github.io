const menubtn = document.querySelector("#menubtn")
const menu = document.querySelector("#menu")

menubtn.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    menu.classList.toggle("")
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var element = document.querySelector("nav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    element.style.padding = "8px";
  } else {
    element.style.padding = "12px";
  }
} 