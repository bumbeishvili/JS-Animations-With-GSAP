// const tl = gsap.timeline();

// tl.to('.box1', {
//     duration: 2,
//     scale: 0,
//     opacity: 0,
//     delay: 1
// })
//     .to('.box2', {
//         duration: 2,
//         x: -200
//     })
//     .to('.box3', {
//         duration: 2,
//         x: -200,
//         borderRadius: 0,
//         rotate: 360
//     })
//     .set('.box1', {
//         duration: 2,
//         scale: 1,
//         opacity: 1
//     })


// Refactor
const tl = gsap.timeline({
    defaults: {
        duration: 0.3,
        delay: 0,

    },
    repeat: -1,
    yoyo: true,
});


tl
    .to('.box1', {
        scale: 0,
        opacity: 0,
        delay: 0.1,
    })
    .to('.box2', {
        x: -200
    })
    .to('.box3', {
        x: -200,
        borderRadius: 0,
        rotate: 360
    })
    .set('.box1', {
        x: 100,
    })
    .to('.box1', {
        scale: 1,
        opacity: 1,
        duration:0.3
    })
   