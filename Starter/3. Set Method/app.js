gsap.set('.box',{
    opacity:0,
    backgroundColor:'white'
})


gsap.to('.box',{
    opacity:1,
    backgroundColor:'green',
    duration:2,
    repeat:-1,
    yoyo:true
})
