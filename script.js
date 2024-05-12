var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;


wheel1 = document.querySelector(".wheel1-img");
wheel2 = document.querySelector(".wheel2-img");
track = document.querySelector(".track");
car = document.querySelector(".car");
body = document.querySelector("body");
start = document.querySelector(".start");

//start function

document.onkeydown = function(e){
     audio.play();
    wheel1.classList.add("wheel-animation");
    wheel2.classList.add("wheel-animation");
    track.classList.add("track-animation");
    car.classList.add("car-animation");
    body.classList.add("body-animation");
    start.innerHTML = "";

}


console.log("working!");