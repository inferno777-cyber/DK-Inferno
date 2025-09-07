let username=document.getElementById("text");
let password=document.getElementById("password");
let alart=document.getElementById("alart");
let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/bubble-pop-04-323580.mp3")
let opsong=new Audio("https://inferno777-cyber.github.io/audio-demo1/startup-sound-variation-6-316850.mp3")
opsong.play();

document.getElementById("btn").addEventListener("click",function(){
    audio.play();
    try {
        if(!username.value || !password.value){
            throw new Error("Invaild");
        }if(username.value !== "Yuta"||password.value !== "7102000"){
            throw new Error("Wrong");
        }alart.innerText="Welcome "+username.value;
        let i=0;
        let go=setInterval(() => {
            i++;
            document.getElementById("go").innerText=i;
            if(i===3){
                clearInterval(go);
                window.location.href="menu.html"
            }
        }, 1000);

    }catch(err){
        alart.innerText=err.message;
       
    }
})

