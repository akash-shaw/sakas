//navbar sticky and hamburger
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

//timeline no hover for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    function applyResponsiveStyles() {
        const timelineArticle = document.querySelectorAll('.timeline-article');

        timelineArticle.forEach(timelineArticle => {
            if (window.innerWidth > 650) {
                timelineArticle.classList.add('do-hover');
            } else {
                timelineArticle.classList.remove('do-hover');
            }
        });
    }

    // Apply styles on initial load
    applyResponsiveStyles();

    // Listen for resize events
    window.addEventListener('resize', applyResponsiveStyles);
});


// reveal-on-scroll animation
document.addEventListener('DOMContentLoaded', function() {
    function reveal() {
        var animate = document.querySelectorAll('.animate');
        
        animate.forEach(function(item) {
            var itemTop = item.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight-100) {
                item.classList.add('reveal');
            } else {
                item.classList.remove('reveal');
            }
        });
    }

    // Call reveal initially
    reveal();

    // Call reveal on scroll
    window.addEventListener('scroll', reveal);
});

// plan-container scroll animation
document.addEventListener('DOMContentLoaded', function() {
    function revealPlans() {
        const planContainers = document.querySelectorAll('.plan-container');
        
        planContainers.forEach(function(plan) {
            const itemTop = plan.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight) {
                plan.classList.add('reveal'); // Add reveal class if in viewport
            } else {
                plan.classList.remove('reveal'); // Remove reveal class if not in viewport
            }
        });
    }

    // Initial reveal check
    revealPlans();

    // Reveal plans on scroll
    window.addEventListener('scroll', revealPlans);
});
// plan-container hover animation
document.addEventListener('DOMContentLoaded', function() {
    const planContainers = document.querySelectorAll('.plan-container');

    planContainers.forEach(function(plan) {
        plan.addEventListener('mouseenter', function() {
            this.classList.add('plan-hover'); // Add class when hovering
        });

        plan.addEventListener('mouseleave', function() {
            const self = this;
            // Delay removal of the class by 0.3s
            setTimeout(function() {
                self.classList.remove('plan-hover'); // Remove class after delay
            }, 300);
        });
    });
});
