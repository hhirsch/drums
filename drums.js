document.addEventListener("DOMContentLoaded", main);
function main() {
  init('sequence');
  init('sequence-1');
  init('sequence-2');
  init('sequence-3');
}

var currentStep = new Array();

function init(element){
  currentStep[element] = 0;
  var div = document.getElementById(element);
  var divs = div.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i += 1) {
      divs[i].onclick = function(){
        if(this.classList.contains('enabled-step')){
          this.classList.remove("enabled-step");
        } else {
          this.classList.add("enabled-step");
        }
      };
    }
};


function nextStep(element){
  var div = document.getElementById(element);
  var divs = div.getElementsByTagName('div');
  divs[currentStep[element]].classList.remove("active-step");
  if(currentStep[element] < 7) {
    divs[currentStep[element]+1].classList.add("active-step");
  } else {
    divs[0].classList.add("active-step");
  }

  currentStep[element]++;
  if(currentStep[element] > 7){
    currentStep[element] = 0;
  }
}

function playStep(element, audio){
  var audio = new Audio(audio);
  audio.volume = document.getElementById('volume').value;
  var div = document.getElementById(element);
  var divs = div.getElementsByTagName('div');
  if(divs[currentStep[element]].classList.contains('enabled-step')){
    audio.play();
  };
}

var timer;
function start() {
  document.getElementById("start_button").disabled = true;
  document.getElementById("stop_button").disabled = false;
  timer = setInterval(function() {
    playStep('sequence', 'beep.wav');
    playStep('sequence-1', 'kick.wav');
    playStep('sequence-2', 'snare.wav');
    playStep('sequence-3', 'hat.wav');
    nextStep('sequence');
    nextStep('sequence-1');
    nextStep('sequence-2');
    nextStep('sequence-3');
  }, 100);
}

function stop() {
  document.getElementById("start_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
  clearInterval(timer);
}
