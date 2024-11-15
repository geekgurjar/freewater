const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoanimation (){
    var videobro = document.querySelector("#videocontainer")
var playbtn = document.querySelector("#play")
videobro.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocontainer.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocontainer.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        top:dets.y-80,
        left:dets.x-50
        
    })
})
}
videoanimation()

function headingloading(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0,
    })
}
headingloading()
function videocontaineranimation(){
    gsap.from("#page1 #videocontainer",{
        scale:0.8,
        opacity:0,
        delay:0.8,
        duration:0.3,
       
    })
}
// function cursormove(){
// videocontaineranimation()
// document.addEventListener("mousemove",function(dets){
//     gsap.to("#cursor",{
//         left:dets.x,
//         top:dets.y,
//     })
// })
// }
// cursormove()
