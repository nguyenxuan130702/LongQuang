document.getElementById("scrool_phan3").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })}
)

document.getElementById("menuthugon").addEventListener("click", function(){
      document.getElementById("menu_mobile-app").style.visibility = "visible";
      document.getElementById("menu_mobile-app").style.transform = "translateX(0%)"; 
})

document.getElementById('close_menu-mobile').addEventListener("click", function(){
  document.getElementById("menu_mobile-app").style.visibility = "hidden"; 
  document.getElementById("menu_mobile-app").style.transform = "translateX(30%)"; 
})