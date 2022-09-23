
function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    
    bar.onclick=() =>{
        if(nav.style.right=="0%"){
            nav.style.right="-50%";
            bar.classList="fas fa-bars";
            header.classList.add("active")
            bar.style.cssText = "margin-left:12px";
            bar.style.cssText = "transform: rotate(180deg)";



        }else{
            nav.style.right="0%";
            bar.classList = "fa-solid fa-xmark";
            bar.style.cssText = "margin-left:15px";
        }
    }
}
myNav();
    function sayHeader(){  
        let header = document.getElementById("header");
        window.addEventListener("scroll",function(){
            if(this.window.scrollY > 0){
                header.classList.add("active")
            }
            else{
                
                header.classList.remove("active")
            
            }
        })
    } sayHeader();

document.querySelectorAll("li a").forEach(function (l) {
    l.addEventListener("click", function () {
        document.querySelector(".accept").classList.remove("accept");
        l.classList.add("accept");
        
    })
})
// start plus 
let ga = document.querySelector(".text-inside i");
let myText = document.querySelector(".cont");
ga.addEventListener("click", function () {
    myText.classList.toggle("me");
    ga.classList.toggle("me");
})
// end plus 
// start video 
function myVideo(){
    let links = document.querySelector(".link-a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".ico .fa-x");
    let videos = document.getElementById("video");
    links.onclick = (e) => {
        e.preventDefault();
    overs.style.display = "block";
    }
    exit.onclick = () => {
        overs.style.display = "none";
        videos.pause();
    }
} 
myVideo();
// end video

// start top
let topDown = document.getElementById("top");
window.onscroll = () => {
    if (scrollY >= 400) {
        topDown.style.display = "flex";
    } else {
        topDown.style.display = "none";

    }
}
topDown.addEventListener("click", (e) => {
    scroll({
        top: 0,
        left: 0,
        behavior:"smooth"
    })
})
// end top 
