function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"*/
});








ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function navAnimation(){
    let  nav=document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
   let tl= gsap.timeline()

  tl.to("#nav-bottom",{
        height:"25vh"
    })  
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.from(".nav-part2 h5 span ",{
        y:25,
        // duration:0.3,
        stagger:{
        amount:0.6 
     }
     })   
    
})

nav.addEventListener("mouseleave",function(){
   let tl= gsap.timeline()

//   tl.to("#nav-bottom",{
//         height:"25vh"
//     })  
//     tl.to(".nav-part2 h5",{
//         display:"block"
//     })
    tl.to(".nav-part2 h5 span ",{
        transform:`translateY(25px)`,
        y:25,
        // duration:0.3,
        stagger:{
        amount:0.2
     }
     })   
     tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1

     })
     tl.to("#nav-bottom",{
        height:0,
        duration:0.2,
     })
    
})
}
// let relem=document.querySelector("#right-elem1")
// let relemImg=document.querySelector("#right-elem1 img")

// relem.addEventListener("mouseenter",function(){
//     relemImg.computedStyleMap.opacity=1

// })
function  page2Animation(){
    let rightElems =document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1,
        })
    })
      elem.addEventListener("mouseleave",function(){
       gsap.to(elem.childNodes[3],{
        opacity:0,
        scale:0,
       })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x-elem.getBoundingClientRect().x-80,
            y:dets.y-elem.getBoundingClientRect().y-180,
        })
    })


})
}
function page3VideoAnimation(){
let page3Center=document.querySelector(".page3-center")
let video=document.querySelector("#page3 video");

page3Center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0,
    })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(1)",
        opacity:0,
        borderRadius:"30px",
    })
})
let sections=document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
        
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})
}
function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x:0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
// function loadingAnimation(){
//     var tl=gsap.timeline()
//     tl.from("#page1",{
//         transform:"scaleX(0.7)scaleY(0.2)"
        
//     })
// }
navAnimation();
page2Animation();
page3VideoAnimation();
page6Animations();