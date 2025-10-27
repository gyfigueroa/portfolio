(function(){
    

    console.log('script running');
    gsap.registerPlugin(ScrollTrigger);

    console.log('gsap running');


    
    

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

    // EMOJI ANIMATION
    let hoverElement = document.querySelector(".profilepic");
    let emojis = document.querySelectorAll(".emoji");

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function animateEmojis() {
        //console.log('animating emojis'),
        hoverElement.classList.add("active");
        for(let i = 0; i < emojis.length; i++){
            emojis[i].classList.add("show");
            //console.log(`emoji ${i}: added show class`);
            await sleep(250);
            //console.log('slept for 250ms');
        }
        
    }

    setTimeout(animateEmojis, 500);

    //console.log('script completed');

    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        loader.style.display = "none";
        //console.log('loaded screen, fading out loader')
    });

    //Fade out
    var s = document.getElementById("preloader").style;
    s.opacity = 1;
    (function fade() {
        (s.opacity -= 0.1) < 0 ? (s.display = "none"/* , console.log("faded out") */) : setTimeout(fade, 40);
    })();

    


})();