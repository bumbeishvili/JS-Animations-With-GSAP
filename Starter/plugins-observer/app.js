gsap.registerPlugin(ScrollTrigger);

gsap.to('.hor div', {
    xPercent: -103,
    scrollTrigger: {
        trigger: '.container',
        start: '-35px',
        end: document.querySelector('.container').offsetWidth,
        scrub: 1,
        pin: true,
    }
})

Array.from(document.querySelectorAll('.custom-scroll-gallery-target>section')).forEach((panel, i, arr) => {
    ScrollTrigger.create({
        trigger: panel,
        start: (-35 - i * 10) + 'px',
        end: `${(arr.length - i - 1)}00%`,
        pin: true,
        scrub: 3,
        pinSpacing: false
    })
})
