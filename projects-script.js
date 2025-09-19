(function(){
    console.log('script running');
    gsap.registerPlugin(ScrollTrigger);
    console.log('gsap running');

    // locking BG for project info

    ScrollTrigger.create({
        trigger: ".project-info",
        start: "top-=30px bottom",
        end: "100%+=30px bottom",
        pinSpacing: false,
        pin: ".project-landing",
        id: "project-info",
        markers: false
    })

    // triggering hidden class when passing the bottom of the project title
    ScrollTrigger.create({
        trigger: ".project-title",
        start: "bottom bottom",
        end: "100%+=2000px bottom",
        toggleClass: {
            targets: ".project-hero",
            className: "hidden"
        },
        markers: false
    })

})();