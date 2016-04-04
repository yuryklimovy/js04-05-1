var timer = document.getElementById('timer');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var msec = 0;
var sec = 0;
var min = 0;
var hour = 0;


function startTimer() {

  pause.style.display = 'inline-block';
  start.style.display = 'none';
  start.removeEventListener('click', startTimer);
  pause.addEventListener('click', pauseTimer);
  stop.addEventListener('click', stopTimer);
  outputTimer(hour, min, sec, msec);

  if (msec < 999) {
    msec = msec + 4;
  } else {
    msec = 0;
    if (sec < 59) {
      sec++;
    } else {
      sec = 0;
      if (min < 60) {
        min++
      } else {
        min = 0;
        hour++;
      }
    }
  }

  timerId = setTimeout(startTimer, 4);
}

function pauseTimer() {
  clearTimeout(timerId);
  pause.style.display = 'none';
  start.style.display = 'inline-block';
  pause.removeEventListener('click', pauseTimer);
  start.addEventListener('click', startTimer);
}

function stopTimer() {
  clearTimeout(timerId);
  pause.removeEventListener('click', pauseTimer);
  stop.removeEventListener('click', stopTimer);
  start.addEventListener('click', startTimer);
  pause.style.display = 'none';
  start.style.display = 'inline-block';
  timer.innerHTML = '00:00:00.000'
  msec = 0;
  sec = 0;
  hour = 0;
  min = 0;
}

function outputTimer(hour, min, sec, msec) {
  if (msec < 10) {
    msec = '00' + msec;
  } else if (msec < 100) {
    msec = '0' + msec
  }

  if (sec < 10) {
    sec = '0' + sec;
  }

  if (min < 10) {
    min = '0' + min;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  timer.innerHTML = hour + ":" + min + ":" + sec + "." + msec;
}

start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);
