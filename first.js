let now=new Date();
let end=new Date("2026-04-30T00:00:00Z");

let show=setInterval(()=>{
				let now=new Date();
				let result=Math.floor((end-now)/1000);
				if(result<=0){
								clearInterval(show);
								
				}else{document.getElementById("h").innerText=result;}
},1000);

let answer=setInterval(()=>{
				let start=new Date("2025-09-06T00:00:00Z");
				let end=new Date();
				let show=Math.floor((end-start)/1000);
				document.getElementById("lastsec").innerText=show;
				if(show===0){
								clearInterval(answer);
				}
},1000);

let audio=new Audio ("https://inferno777-cyber.github.io/audio-demo1/JoJos%20Bizarre%20Adventure%20Part%203%20Stardust%20Crusaders%20Opening%20-%20Stand%20Proud_tv.mp3")
let motivate=document.getElementById("motivate")
let pic,pic1;
let vd=document.getElementById("vd");

motivate.addEventListener("click",function(){
audio.play();
document.getElementById("con").style.background= "linear-gradient(30deg,rgba(153,0,153,0.7),rgba(0,204,205,0.7))";
let pic=document.createElement("img");
pic.classList.add("pic");
pic.src="https://inferno777-cyber.github.io/audio-demo1/pngaaa.com-28175.png"

let pic1=document.createElement("img");
pic1.classList.add("pic1");
pic1.src="https://inferno777-cyber.github.io/audio-demo1/pngaaa.com-28175.png"


document.body.appendChild(pic);
document.body.appendChild(pic1);
vd.loop=true;
vd.play();
vd.style.display="block";

audio.addEventListener("ended",function(){
	if(pic) pic.remove();
	if(pic1) pic1.remove();
	vd.pause();
	vd.style.display="none";
	document.getElementById("con").style.background="rgba(253, 253, 253, 0.5)";
	})
})



