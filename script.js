/* ======================================
   VAISH MEMORIAL WEBSITE
   script.js
====================================== */

const PASSWORD = "123456";

const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const error = document.getElementById("error");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const loading = document.getElementById("loading");

/* -----------------------
Loading Screen
------------------------*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.display = "none";

    },1500);

});

/* -----------------------
Unlock Website
------------------------*/

function unlock(){

    const pass = document.getElementById("password").value;

    if(pass === PASSWORD){

        lockScreen.style.opacity = "0";

        setTimeout(()=>{

            lockScreen.style.display="none";

            mainContent.style.display="block";

            createHearts();

        },800);

    }

    else{

        error.innerHTML="❌ Wrong Password";

        error.style.color="red";

    }

}

/* -----------------------
Music
------------------------*/

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;

    }

});

/* -----------------------
Floating Hearts
------------------------*/

function createHearts(){

    setInterval(()=>{

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        heart.style.animationDuration=(4+Math.random()*5)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },400);

}

/* -----------------------
Gallery Animation
------------------------*/

const images=document.querySelectorAll(".galleryGrid img");

images.forEach(img=>{

    img.addEventListener("mouseover",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseout",()=>{

        img.style.transform="scale(1)";

    });

});

/* -----------------------
Fade Sections
------------------------*/

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0px)";

        }

    });

});

document.querySelectorAll(".gallery,.tribute").forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(80px)";

    section.style.transition="1s";

    observer.observe(section);

});

/* -----------------------
Disable Right Click
------------------------*/

document.addEventListener("contextmenu",function(e){

    e.preventDefault();

});

/* -----------------------
Disable Ctrl+U
------------------------*/

document.onkeydown=function(e){

    if(e.ctrlKey && e.key==="u"){

        return false;

    }

};

/* -----------------------
Console Message
------------------------*/

console.log("%cVAISH MEMORIAL WEBSITE","color:white;font-size:24px;background:black;padding:10px;");