
window.onscroll = function() {stickMenu()};

        var menu = document.getElementById("navbar-babyshop");
        var sticky = menu.offsetTop;
        var logo = document.getElementById("logo-navbar"); 


        function stickMenu() {
        if (window.pageYOffset >= sticky) {
            menu.classList.add("sticky");
            logo.classList.add("hienthi_logo")
        } else {
            menu.classList.remove("sticky");
            logo.classList.remove("hienthi_logo")
        }

        
        }