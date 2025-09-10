function icheck() {
    let now = new Date();
    let bday = new Date("2000-10-07T00:00:00");

    // ဒီနှစ် birthday
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());

    if(nextBday < now) {
        nextBday.setFullYear(nextBday.getFullYear() + 1);
    }

    // Month difference
    let months = nextBday.getMonth() - now.getMonth();
    if(nextBday.getDate() < now.getDate()) {
        months--;
    }
    if(months < 0) months += 12;

    // Day difference
    let days = nextBday.getDate() - now.getDate();
    if(days < 0){
        let daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        days += daysInMonth;
    }

    // Hours, Minutes, Seconds
    let diffMs = nextBday - now;
    let hours   = Math.floor((diffMs / (1000*60*60)) % 24);
    let minutes = Math.floor((diffMs / (1000*60)) % 60);
    let seconds = Math.floor((diffMs / 1000) % 60);

    // Age
    let totalyr = now.getFullYear() - bday.getFullYear();
    document.getElementById("iyr").innerText = totalyr + " yrs";

    // Show countdown
    document.getElementById("im").innerText = months;
    document.getElementById("id").innerText = days;
    document.getElementById("ih").innerText = hours;
    document.getElementById("imi").innerText = minutes;
    document.getElementById("is").innerText = seconds;

    if(diffMs <= 0){
        console.log("🎉 Happy Birthday!");
    }
}

setInterval(icheck, 1000);
icheck();

/*function fcheck(){ 
    let fnow=new Date();
    let fbday=new Date("2000-09-07T00:00:00");
    let fnextBday=new Date(fnow.getFullYear(),fbday.getMonth(),fbday.getDate());

    if (fnextBday < fnow){
        fnextBday=setFullYear(fnextBday.getFullYear()+1);
    }
    let fmonths=fnextBday.getMonth()-fnow.getMonth();
    if(fnextBday.getDate()<fnow.getDate()){
        fmonths--;
    }
    if(fmonths<0){
        fmonths+=12;
    }

    let fdays=fnextBday.getDate()-fnow.getDate();
    if(fdays<0){
        let fdaysInMonth=new Date(fnow.getFullYear(),fnow.getMonth()+1,0).getDate();
        fdays+=fdaysInMonth;
    }

    let fdiffMs=fnextBday-fnow;
    let fseconds=Math.floor(fdiffMs/1000)%60;
    let fminutes=Math.floor(fdiffMs/(1000*60)%60);
    let fhours=Math.floor(fdiffMs/(1000*60*60)%24);

    let ftotalyr=fnow.getFullYear()-fbday.getFullYear();
    document.getElementById("fyr").innerText= ftotalyr + " Yr";

    document.getElementById("fm").innerText=fmonths;
    document.getElementById("fd").innerText=fdays;
    document.getElementById("fh").innerText=fhours;
    document.getElementById("fmi").innerText=fminutes;
    document.getElementById("fs").innerText=fseconds;

    if (fdiffMs<=0){
        document.getElementById("fdes2").innerText="happy Birthday";
    }
}*/

function fcheck() {
    let now = new Date();
    let bday = new Date("1952-09-22T09:00:00");

    // ဒီနှစ် birthday
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());

    if(nextBday < now) {
        nextBday.setFullYear(nextBday.getFullYear() + 1);
    }

    // Month difference
    let months = nextBday.getMonth() - now.getMonth();
    if(nextBday.getDate() < now.getDate()) {
        months--;
    }
    if(months < 0) months += 12;

    // Day difference
    let days = nextBday.getDate() - now.getDate();
    if(days < 0){
        let daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        days += daysInMonth;
    }

    // Hours, Minutes, Seconds
    let diffMs = nextBday - now;
    let hours   = Math.floor((diffMs / (1000*60*60)) % 24);
    let minutes = Math.floor((diffMs / (1000*60)) % 60);
    let seconds = Math.floor((diffMs / 1000) % 60);

    // Age
    let totalyr = now.getFullYear() - bday.getFullYear();
    document.getElementById("fyr").innerText = totalyr + " yrs";

    // Show countdown
    document.getElementById("fm").innerText = months;
    document.getElementById("fd").innerText = days;
    document.getElementById("fh").innerText = hours;
    document.getElementById("fmi").innerText = minutes;
    document.getElementById("fs").innerText = seconds;

    if(diffMs <= 0){
        console.log("🎉 Happy Birthday!");
    }
}

setInterval(fcheck,1000);

fcheck();

function mcheck() {
    let now = new Date();
    let bday = new Date("2000-10-07T00:00:00");

    // ဒီနှစ် birthday
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());

    if(nextBday < now) {
        nextBday.setFullYear(nextBday.getFullYear() + 1);
    }

    // Month difference
    let months = nextBday.getMonth() - now.getMonth();
    if(nextBday.getDate() < now.getDate()) {
        months--;
    }
    if(months < 0) months += 12;

    // Day difference
    let days = nextBday.getDate() - now.getDate();
    if(days < 0){
        let daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        days += daysInMonth;
    }

    // Hours, Minutes, Seconds
    let diffMs = nextBday - now;
    let hours   = Math.floor((diffMs / (1000*60*60)) % 24);
    let minutes = Math.floor((diffMs / (1000*60)) % 60);
    let seconds = Math.floor((diffMs / 1000) % 60);

    // Age
    let totalyr = now.getFullYear() - bday.getFullYear();
    document.getElementById("myr").innerText = totalyr + " yrs";

    // Show countdown
    document.getElementById("mm").innerText = months;
    document.getElementById("md").innerText = days;
    document.getElementById("mh").innerText = hours;
    document.getElementById("mmi").innerText = minutes;
    document.getElementById("ms").innerText = seconds;

    if(diffMs <= 0){
        console.log("🎉 Happy Birthday!");
    }
}

setInterval(mcheck,1000);
mcheck();

function ycheck() {
    let now = new Date();
    let bday = new Date("2000-10-07T00:00:00");

    // ဒီနှစ် birthday
    let nextBday = new Date(now.getFullYear(), bday.getMonth(), bday.getDate());

    if(nextBday < now) {
        nextBday.setFullYear(nextBday.getFullYear() + 1);
    }

    // Month difference
    let months = nextBday.getMonth() - now.getMonth();
    if(nextBday.getDate() < now.getDate()) {
        months--;
    }
    if(months < 0) months += 12;

    // Day difference
    let days = nextBday.getDate() - now.getDate();
    if(days < 0){
        let daysInMonth = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
        days += daysInMonth;
    }

    // Hours, Minutes, Seconds
    let diffMs = nextBday - now;
    let hours   = Math.floor((diffMs / (1000*60*60)) % 24);
    let minutes = Math.floor((diffMs / (1000*60)) % 60);
    let seconds = Math.floor((diffMs / 1000) % 60);

    // Age
    let totalyr = now.getFullYear() - bday.getFullYear();
    document.getElementById("yyr").innerText = totalyr + " yrs";

    // Show countdown
    document.getElementById("ym").innerText = months;
    document.getElementById("yd").innerText = days;
    document.getElementById("yh").innerText = hours;
    document.getElementById("ymi").innerText = minutes;
    document.getElementById("ys").innerText = seconds;

    if(diffMs <= 0){
        console.log("🎉 Happy Birthday!");
    }
}

setInterval(ycheck,1000);

ycheck();

let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/magic-forest-318165.mp3");
audio.loop=true;
audio.play();


