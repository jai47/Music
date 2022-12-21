const a = document.getElementById("play");
adoElm = new Audio('../Songs/1.mp3');
playerImage = document.getElementById("playerImage");
function play(){
    a.classList.toggle('bx-play')
    a.classList.toggle('bx-pause')
    playerImage.style.opacity = '1';
    if(adoElm.paused){
        adoElm.play();

    }else{
        adoElm.paused();
    }
}
