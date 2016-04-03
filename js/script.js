var start = document.getElementById('start');
var stop = document.getElementById('stop');
var s  = 0;


function startTimer(){

  stop.style.display = 'block';
  start.style.display = 'none';
  start.removeEventListener('click', startTimer);
  stop.addEventListener('click', stopTimer);

  var div = document.getElementById('timer');

  div.innerHTML = s;
  s = s +4;
  console.log(s);
  timerId = setTimeout (startTimer, 4);
}

function stopTimer(){
  clearTimeout(timerId);
  stop.style.display = 'none';
  start.style.display = 'block';
  stop.removeEventListener('click', stopTimer);
  start.addEventListener('click', startTimer);
}





start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);
