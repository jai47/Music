const a = document.getElementById("play");
adoElm = new Audio('../Songs/1.mp3');
playerImage = document.getElementById("playerImage");
progressBar = document.getElementById("progressBar");
currentDuration = document.getElementById("current_duration");
totalDuration = document.getElementById("total_duration");


a.addEventListener('click', ()=>{
    if(adoElm.paused || adoElm.currentTime<=0){
        adoElm.play();
        a.classList.remove('bx-play');
        a.classList.add('bx-pause');
        playerImage.style.opacity = '1';
        playerImage.style.display = 'block';
        
    }
    else{
        adoElm.pause();
        a.classList.remove('bx-pause');
        a.classList.add('bx-play');
        playerImage.style.opacity = '0';
        playerImage.style.display = 'none';
    }
})

adoElm.addEventListener('timeupdate', ()=>{
    p = parseInt((adoElm.currentTime/adoElm.duration)*100000);
    progressBar.value = p;
    let cS = adoElm.currentTime;
    currentDuration.innerText =  "0"+parseInt(adoElm.currentTime/60)+":"+parseInt(cS%60);
    totalDuration.innerText ="0"+parseInt(adoElm.duration/60)+":"+parseInt(adoElm.duration%60);
})

progressBar.addEventListener('change', ()=>{
    adoElm.currentTime = (progressBar.value*adoElm.duration)/100000;
})

