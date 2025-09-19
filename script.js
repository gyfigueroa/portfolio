(function(){
    console.log('script running');
    gsap.registerPlugin(ScrollTrigger);

    console.log('gsap running');

    let developers = document.querySelectorAll('.developer');

    let footer = document.querySelector(".footer");


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

    ScrollTrigger.create({
        trigger: ".project-info",
        start: "top-=30px bottom",
        end: "100%+=30px bottom",
        pinSpacing: false,
        pin: ".project-landing",
        id: "project-info",
        markers: true
    })

    ScrollTrigger.create({
        trigger: ".project-title",
        start: "bottom bottom",
        end: ScrollTrigger.maxScroll(window),
        toggleClass: {
            targets: ".project-hero",
            className: "hidden"
        },
        markers: false
    })

    /* gsap.to(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
            end: "bottom bottom",
            pinSpacing: false,
            pin: ".selected-works",
            id: "footer",
            markers: false
        }
    }) */



    /* ScrollTrigger.create({
        trigger: ".developer",
        start: "top 80%",
        toggleClass: "active",
        markers: true
    }) */
})();