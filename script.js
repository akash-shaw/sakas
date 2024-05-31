document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("navbar");
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");
    let sticky = navbar.offsetTop;

    // Toggle nav links on hamburger click
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    function stickNavbar() {
        if (window.innerWidth >= 800) {
            if (window.scrollY > sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }

    function checkScreenWidth() {
        if (window.innerWidth < 800) {
            navbar.classList.add('sticky');
        } else {
            // Remove sticky class if at the top and width is >= 800
            if (window.scrollY <= sticky) {
                navbar.classList.remove('sticky');
            }
        }
        if (window.innerWidth < 650) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }

    // Initial checks when the script loads
    checkScreenWidth();
    stickNavbar();

    // Listen for window scroll events
    window.onscroll = function() {
        stickNavbar();
    };

    // Listen for window resize events
    window.addEventListener('resize', function() {
        // Recalculate sticky offset in case of resize
        sticky = navbar.offsetTop;
        checkScreenWidth();
        stickNavbar();
    });
});
