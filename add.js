function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }
} 

const logo1 = document.querySelector
(".big-center-image img");
TweenMax.from(logo1, 8, {opacity: 0});

const logo2 = document.querySelector
(".logo-image-center-2");
TweenMax.from(logo2, 12, {opacity: 0});

const logo3 = document.querySelector
(".logo-image-center-3");
TweenMax.from(logo3, 12, {opacity: 0});

