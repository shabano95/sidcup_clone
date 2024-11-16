var crsr= document.querySelector("#cursor")
var crsr_blur= document.querySelector("#cursor_blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20+"px"
    crsr.style.top = dets.y+"px"
    crsr_blur.style.left = dets.x-150+"px"
    crsr_blur.style.top = dets.y-150+"px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale =3
        crsr.style.border ="1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1
        crsr.style.border ="0px solid #95C11E"
        crsr.style.backgroundColor ="#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration:1,
    height:"130px",
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:1,
    }
})
gsap.from("#about_us img,#about_us_in",{
    y:50,
    opacity:0,
    duration:3,
    stagger:3,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        // markers:"true",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from(".cards, #card-1, #card-2, #card-3",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    stagger:3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})
gsap.from("#upper",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#upper",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 60%",
        scrub:4
    }
})
gsap.from("#below",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#upper",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 60%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:"true",
        start:"top 80%",
        end:"top 95%",
        scrub:1
    }
})