let count=document.getElementById("countcon");
let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/bubble-pop-04-323580.mp3");

count.addEventListener("click",function(){
    audio.play();
    setTimeout(()=>{
    window.location.href="firststep.html";
    },500);
})