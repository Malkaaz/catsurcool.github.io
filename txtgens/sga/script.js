var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

ta1.addEventListener('keyup', catchText);

function catchText() {
  ta2.value = ta1.value;
}

function def() {
  var sgaRound = document.getElementsByClassName('sga-round');

  for (var i = 0;i < sgaRound.length;i++) {
    sgaRound[i].className = 'sga-def';
  }
}

function round() {
  var sgaDef = document.getElementsByClassName('sga-def');

  for (var i = 0; i < sgaDef.length; i++) {
    sgaDef[i].className = 'sga-round';
  }
}