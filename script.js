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


})();