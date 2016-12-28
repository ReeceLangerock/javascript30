document.addEventListener("keydown", function(keyPressed) {
    playSound(keyPressed.key);
    addButtonCSS(keyPressed['key']);
});

document.addEventListener("keyup", function(keyPressed) {
    removeButtonCSS(keyPressed['key']);
});


function addButtonCSS(buttonToAddTo) {
  document.getElementById(buttonToAddTo).classList.toggle("playing");
};

function removeButtonCSS(buttonToRemoveFrom){
  console.log("removing");
  document.getElementById(buttonToRemoveFrom).classList.toggle("playing");
}


function playSound(soundToPlay) {

    switch (soundToPlay) {
        case 'a':
            var soundA = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav");
            soundA.play();
            break;
        case 's':
            var soundS = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav");
            soundS.play();
            break;
        case 'd':
            var soundD = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav");
            soundD.play();
            break;
        case 'f':
            var soundF = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav");
            soundF.play();
            break;
        case 'g':
            var soundG = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav");
            soundG.play();
            break;
        case 'h':
            var soundH = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav");
            soundH.play();
            break;
        case 'j':
            var soundJ = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav");
            soundJ.play();
            break;
        case 'k':
            var soundK = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav");
            soundK.play();
            break;
            case 'l':
              var soundL = new Audio("https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav");
              soundL.play();
              break;
    }

};
