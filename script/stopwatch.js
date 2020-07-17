const chronometer = new Chronometer();

let score = document.getElementById('targets_clicked');
let targetsParent = document.querySelector('#targets')
let targets = document.querySelectorAll(".target");
let total = score;

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let timer;
let clicked = false;


//clock only displays 1/100 of a second so only needed to updated page every 10 milliseconds.
function printTime() {
  // ... your code goes here
  if(!clicked) {
    clicked = true;

    timer = setInterval(() => {
      timerDisplay()
      if(printSeconds()[0] === '1') {
        clicked = false
        clearInterval(timer)
        targetsParent.innerHTML = `<div id = "endGame"><h1 id="scoreMsg">Not bad! You scored <span id ='showScore'>${score.innerHTML}</span> points in 10 seconds!</h1><br> </br><button id="newGameBtn" class="gameBtn" type="button" onClick="window.location.reload();">I can do better!</button><button id="leaveBtn" class="gameBtn" type="button" 
        onclick="window.close();">I accept my life as a slow clicker...</button></div><div id= "scoreboard"><h1 id= "sac">Score Assessment Chart</h1><h1>75+ Points : Legendary</h1><h2>50 - 75 Points : Is your finger burning yet?</h2><h3>25 - 50 Points : Not Bad...</h3><h4>0-25 Points : Hello? Are you even playing?...</h4></div>`
      }
    }, 10);
  }
}

//created timerDisplay function to simplify code
function timerDisplay() {
  secDec.innerText = printSeconds()[0];
  secUni.innerText = printSeconds()[1];
  milDec.innerText = printMilliseconds()[0];
  milUni.innerText = printMilliseconds()[1];
}

function printMinutes() {
  // ... your code goes here
  return chronometer.getMinutes();
}

function printSeconds() {
  // ... your code goes here
  return chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  return chronometer.getMilliseconds();
}


function setStopBtn() {
  // ... your code goes here
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}


function setStartBtn() {
  // ... your code goes here
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
let startTarget = document.getElementById('t1')

startTarget.addEventListener('click', () => {
  // ... your code goes here
  if (startTarget.className !== "hide") {
    chronometer.startClick();
    printTime();
  } else {
    chronometer.stopClick();
    clearInterval(timer);
    setStartBtn();
    setResetBtn()
  }
});

// Reset/Split Button
