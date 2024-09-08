// GSAP DRAGGABLE

// gsap.registerPlugin(Draggable)

// Draggable.create('.box', {
//     bounds: 'body'
// })


// GSAP Flip

// gsap.registerPlugin(Flip)

// function swapElements([a, b]) {
//     if (a.parentNode.children[0] === a) {
//         a.parentNode.appendChild(a)
//     } else {
//         a.parentNode.appendChild(b);
//     }
// }

// const boxes = Array.from(document.querySelectorAll('.box'));
// const state = Flip.getState(boxes);
// swapElements(boxes);
// Flip.from(state, { duration: 2, ease: "power1.inOut" });


// GSAP Motion Path
gsap.registerPlugin(MotionPathPlugin);

gsap.to(".box", {
    duration: 5,
    repeat: -1,
    yoyo: true,
    motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});