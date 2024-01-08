// <!-- JavaScript : MENU-HEADER (Break point: Modal Mobile) -->

        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('js-mobile-menu');
        var headerHeight = header.clientHeight;

        // Đỏng mở menu
        mobileMenu.onclick = function() {
            var isClosed = header.clientHeight === headerHeight;
            if(isClosed){
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }

        // Đóng khi chọn một item trong menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for  (var i = 0; i  < menuItems.length; i++){
            var menuItem = menuItems[i];
            // header.style.height = null;


            menuItem.onclick = function() {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contain('subnav'); 
                if(!isParentMenu){
                    header.style.height = null;
                }
            }
        }