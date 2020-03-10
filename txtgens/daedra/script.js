var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

ta1.addEventListener('keyup', catchText);

function catchText() {
  ta2.value = ta1.value;
}

function show1() {
  document.querySelectorAll('#hide1').forEach(function(element){
    element.style.display = 'block';
  });
  document.getElementById('display1').innerHTML = 'Hide';
  document.getElementById('display1').onclick = hide1;
}

function hide1() {
  document.querySelectorAll('#hide1').forEach(function(element){
    element.style.display = 'none';
  });
  document.getElementById('display1').innerHTML = 'Show';
  document.getElementById('display1').onclick = show1;
}

function hide2() {
  document.querySelectorAll('#hide2').forEach(function(element){
    element.style.display = 'none';
  });
  document.getElementById('display2').innerHTML = 'Show';
  document.getElementById('display2').onclick = show2;
}

function show2() {
  document.querySelectorAll('#hide2').forEach(function(element){
    element.style.display = 'block';
  });
  document.getElementById('display2').innerHTML = 'Hide';
  document.getElementById('display2').onclick = hide2;
}
