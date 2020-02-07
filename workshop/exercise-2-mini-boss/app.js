



//StopWatch


var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start() {
  toggleBtn.textContent = 'Stop';
  watch.start();
}

function stop() {
  toggleBtn.textContent = 'Start';
  watch.stop();
}

toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start();
});

resetBtn.addEventListener('click', function() {
  watch.reset();
});



function Stopwatch(elem) {
    var time = 0;
    var offset;
    var interval;
  
    function update() {
      if (this.isOn) {
        time += delta();
      }
      
      elem.textContent = timeFormatter(time);
    }
  
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
  
      offset = now;
  
      return timePassed;
    }
  
    function timeFormatter(time) {
      time = new Date(time);
  
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();
  
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
  
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
  
      while (milliseconds.length < 3) {
        milliseconds = '0' + milliseconds;
      }
  
      return minutes + ' : ' + seconds + ' . ' + milliseconds;
    }
  
    this.start = function() {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    };
  
    this.stop = function() {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    };
  
    this.reset = function() {
      time = 0;
      update();
    };
  
    this.isOn = false;
  }


 //clock

  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



//countdown

const userInput = 4;

const countdownBtn = document.getElementById('start');
const displaySeconds = document.getElementById('displaySeconds');
displaySeconds.innerText = `${userInput}`




function clickEvent(event){
    userInput = document.getElementById('extra7').value;
    console.log('skfjsk' + userInput);
    // const counter = setInterval(function() {
    //     userInput 
        
    //     timer.innerText = totalTime;
    //     totalTime = totalTime - 1;
    // }, 1000);


}

    

countdownBtn.addEventListener('click', clickEvent);





function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


