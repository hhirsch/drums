document.addEventListener("DOMContentLoaded", init);

function init(){
  var div = document.getElementById('sequence');
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

var currentStep = 0;
function nextStep(){
  var div = document.getElementById('sequence');
  var divs = div.getElementsByTagName('div');
  divs[currentStep].classList.remove("active-step");
  if(currentStep < 7) {
    divs[currentStep+1].classList.add("active-step");
  } else {
    divs[0].classList.add("active-step");
  }

  currentStep++;
  if(currentStep > 7){
    currentStep = 0;
  }
}

function playStep(){
  var div = document.getElementById('sequence');
  var divs = div.getElementsByTagName('div');
  if(divs[currentStep].classList.contains('enabled-step')){
    audio.play();
  };
}

var timer;
var audio = new Audio('beep.wav');
function start() {
  document.getElementById("start_button").disabled = true;
  document.getElementById("stop_button").disabled = false;
  timer = setInterval(function() {
    playStep();
    nextStep();
  }, 500);
}

function stop() {
  document.getElementById("start_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
  clearInterval(timer);
}
