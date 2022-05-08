var currentStep = 0;
function nextStep(){
  var div = document.getElementById('sequence');
  var divs = div.getElementsByTagName('div');
  var divArray = [];
  for (var i = 0; i < divs.length; i += 1) {
    if(i == currentStep) {
      divs[i].classList.remove("active-step");
      if(i < 7) {
        divs[i+1].classList.add("active-step");
      } else {
        divs[0].classList.add("active-step");
      }
    }
  }
  currentStep++;
  if(currentStep > 7){
    currentStep = 0;
  }
}

function playStep(){
  audio.play();
}

var timer;
var audio = new Audio('beep.wav');
function start() {
  document.getElementById("start_button").disabled = true;
  document.getElementById("stop_button").disabled = false;
  timer = setInterval(function() {
    playStep();
    nextStep();
  }, 1000);
}

function stop() {
  document.getElementById("start_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
  clearInterval(timer);
}
