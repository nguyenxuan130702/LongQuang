
    var stickyElement = document.getElementById("stickyElement");
    var placeholder = document.getElementById("placeholder");
    var sticky = stickyElement.offsetTop;
    var elementHeight = stickyElement.offsetHeight;
    var elementBottom = stickyElement.offsetTop + elementHeight;

    var productElement = document.getElementById("products-babyshop"); 
    var element1Height = productElement.offsetHeight;
    var element1Bottom = productElement.offsetTop + element1Height;
    

    placeholder.style.height = stickyElement.offsetHeight + 'px';



    document.getElementById("xemchitiet-close").addEventListener("click", function(){
      document.getElementById('popup-xemchitiet').style.display = "none"; 
    })

    document.getElementById("scale_item-product").addEventListener("click", function(){
      document.getElementById("popup-xemchitiet").style.display = "block"; 
    })

    document.getElementById("menuthugon").addEventListener("click", function(){
      document.getElementById("menu_mobile-app").style.visibility = "visible"; 
      document.getElementById("menu_mobile-app").style.transform = "translateX(0%)"; 
  })

  document.getElementById("close_menu-mobile").addEventListener("click", function(){
      document.getElementById("menu_mobile-app").style.transform = "translateX(30%)";
      document.getElementById("menu_mobile-app").style.visibility = "hidden";  
  })


  document.getElementById("checklist_mobile").addEventListener("click", function(){
    document.getElementById("stickyElement1").style.transform = "translateX(0%)"; 
    document.getElementById("mobile-nenslide").style.visibility = "visible"; 
    document.getElementById("stickyElement1").style.visibility = "visible"; 
    document.getElementById("mobile-nenslide").style.transform = "translateX(0%)"; 
    document.getElementById("checklist_mobile").style.transform = "translateX(650%)";
    
    document.getElementById("checklist_mobile").addEventListener("click", function(){
      document.getElementById("stickyElement1").style.transform = "translateX(-20%)"; 
    document.getElementById("mobile-nenslide").style.visibility = "hidden"; 
    document.getElementById("stickyElement1").style.visibility = "hidden"; 
    document.getElementById("mobile-nenslide").style.transform = "translateX(-20%)"; 
    document.getElementById("checklist_mobile").style.transform = "translateX(0%)";
    })
  })


  document.querySelectorAll(".fa-expand-arrows-alt").forEach(function(item){
    item.addEventListener("click", function(){
      document.getElementById("popup-xemchitiet").style.display = "block"; 
    })
  })


  //Ham de tao su kien click vao thanh slidebar. 
  document.querySelectorAll(".fa-chevron-down").forEach(function(item, index){
    item.addEventListener("click", function() {
      // Assuming "menu_item-banner" is a class
      const menuBanner = document.querySelectorAll(".menu_item-banner");

      if(menuBanner[index]){
        if (menuBanner[index].style.display === "block") {
          menuBanner[index].style.display = "none";
          item.style.transform = "rotate(0deg)";
        } else {
          menuBanner[index].style.display = "block";
          item.style.transform = "rotate(180deg)";
        }
      }
    });
  })

