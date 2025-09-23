(function(){
    console.log('script running');
    gsap.registerPlugin(ScrollTrigger);

    console.log('gsap running');


    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        loader.style.display = "none";
    });

    //Fade out, optional
    var s = document.getElementById("preloader").style;
    s.opacity = 1;
    (function fade() {
        (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
    })();

    let developers = document.querySelectorAll('.developer');

    //developers for home page
    developers.forEach(developer => {
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: developer,
                start: "bottom 90%",
                toggleClass: "active",
                once: true,
                markers: false
            }
        })
    })


})();