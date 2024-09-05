
let tween = gsap.to('.box1', {
    y: -100,
    duration: 2,
    backgroundColor: 'teal',
    repeat: -1,
    yoyo: true,
})

document.querySelector('.play').addEventListener('click', () => {
    tween.play()
})
document.querySelector('.pause').addEventListener('click', () => {
    tween.pause()
})
document.querySelector('.restart').addEventListener('click', () => {
    tween.restart()
})



