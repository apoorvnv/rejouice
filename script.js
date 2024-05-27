var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
})