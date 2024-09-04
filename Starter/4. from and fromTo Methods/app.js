gsap.from('.box1', {
    y: -100,
    backgroundColor: 'gray',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'linear'
})


gsap.fromTo('.box2',
    {
        y: -100,
        opacity: 0
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'linear',
        borderRadius: 0,
        repeat: -1,
        yoyo: true
    }
)