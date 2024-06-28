window.onscroll = function() {stickMenu()};

var menu = document.getElementById("shop_banner-home");
var sticky = menu.offsetTop;

function stickMenu() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}

document.getElementById("show-menu1-mobile").addEventListener("click", function(){
  document.getElementById("menu1-content-mobile").style.display = "block"; 
  document.getElementById("show-menu1up-mobile").style.display = "block";
  document.getElementById("show-menu1-mobile").style.display = "none"; 
}); 

document.getElementById("show-menu1up-mobile").addEventListener("click", function(){
  document.getElementById("menu1-content-mobile").style.display = "none"; 
  document.getElementById("show-menu1up-mobile").style.display = "none";
  document.getElementById("show-menu1-mobile").style.display = "block"; 
}); 

document.getElementById("show-menu2-mobile").addEventListener("click", function(){
  document.getElementById("menu2-content-mobile").style.display = "block"; 
  document.getElementById("show-menu2up-mobile").style.display = "block";
  document.getElementById("show-menu2-mobile").style.display = "none"; 
}); 

document.getElementById("show-menu2up-mobile").addEventListener("click", function(){
  document.getElementById("menu2-content-mobile").style.display = "none"; 
  document.getElementById("show-menu2up-mobile").style.display = "none";
  document.getElementById("show-menu2-mobile").style.display = "block"; 
});

document.getElementById("show-menu3-mobile").addEventListener("click", function(){
  document.getElementById("menu3-content-mobile").style.display = "block"; 
  document.getElementById("show-menu3up-mobile").style.display = "block";
  document.getElementById("show-menu3-mobile").style.display = "none"; 
}); 

document.getElementById("show-menu3up-mobile").addEventListener("click", function(){
  document.getElementById("menu3-content-mobile").style.display = "none"; 
  document.getElementById("show-menu3up-mobile").style.display = "none";
  document.getElementById("show-menu3-mobile").style.display = "block"; 
});

document.getElementById("show-menu-content").addEventListener("click", function(){
  document.getElementById("menu_mobile-app").style.visibility = "visible";
  
})

document.getElementById("icon-close").addEventListener("click", function(){
  document.getElementById("menu_mobile-app").style.visibility = "hidden"; 
})

document.getElementById("icon-close-filter").addEventListener("click", function(){
  document.getElementById("nen_filter").style.visibility = "hidden"; 
  document.getElementById("shop_filter-mobile").style.visibility = "hidden"; 
})

document.getElementById("shop_slidebar-mobile").addEventListener("click", function(){
  document.getElementById("nen_filter").style.visibility = "visible"; 
  document.getElementById("shop_filter-mobile").style.visibility = "visible"; 
})


document.getElementById("men-products").addEventListener("click", function(){
  document.getElementById("men-item").style.display = "block"; 
  document.getElementById("men-up-products").style.display = "block"; 
  document.getElementById("men-products").style.display = "none"; 

  document.getElementById("men-up-products").addEventListener("click", function(){
      document.getElementById("men-item").style.display = "none"; 
      document.getElementById("men-up-products").style.display = "none"; 
      document.getElementById("men-products").style.display = "block";
  })
}); 

//Code ở phần filter item 
document.getElementById('women-product-mobile').addEventListener("click", function(){
  document.getElementById("women-item-mobile").style.display = "block"; 
  document.getElementById("women-up-product-mobile").style.display = "block"; 
  document.getElementById("women-product-mobile").style.display = "none";

  document.getElementById("women-up-product-mobile").addEventListener("click", function(){
      document.getElementById("women-item-mobile").style.display = "none"; 
      document.getElementById("women-up-product-mobile").style.display = "none"; 
      document.getElementById("women-product-mobile").style.display = "block";
  })
}); 
document.getElementById('tshirt-product-mobile').addEventListener("click", function(){
  document.getElementById("tshirts-item-mobile").style.display = "block"; 
  document.getElementById("tshirt-up-products-mobile").style.display = "block"; 
  document.getElementById("tshirt-product-mobile").style.display = "none";

  document.getElementById("tshirt-up-products-mobile").addEventListener("click", function(){
      document.getElementById("tshirts-item-mobile").style.display = "none"; 
      document.getElementById("tshirt-up-products-mobile").style.display = "none"; 
      document.getElementById("tshirt-product-mobile").style.display = "block";
  })
});
document.getElementById('music-product-mobile').addEventListener("click", function(){
  document.getElementById("music-item-mobile").style.display = "block"; 
  document.getElementById("music-up-products-mobile").style.display = "block"; 
  document.getElementById("music-product-mobile").style.display = "none";

  document.getElementById("music-up-products-mobile").addEventListener("click", function(){
      document.getElementById("music-item-mobile").style.display = "none"; 
      document.getElementById("music-up-products-mobile").style.display = "none"; 
      document.getElementById("music-product-mobile").style.display = "block";
  })
});

document.getElementById('men-products-mobile').addEventListener("click", function(){
  document.getElementById("men-item-mobile").style.display = "block"; 
  document.getElementById("men-up-products-mobile").style.display = "block"; 
  document.getElementById("men-products-mobile").style.display = "none";

  document.getElementById("men-up-products-mobile").addEventListener("click", function(){
      document.getElementById("men-item-mobile").style.display = "none"; 
      document.getElementById("men-up-products-mobile").style.display = "none"; 
      document.getElementById("men-products-mobile").style.display = "block";
  })
});