var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

ta1.addEventListener('keyup', catchText);

function catchText() {
  ta2.value = ta1.value;
}

function show() {
  document.querySelectorAll('#hide').forEach(function(element){
    element.style.display = 'block';
  });
  document.getElementById('display').innerHTML = 'Hide';
  document.getElementById('display').onclick = hide;
}

function hide() {
  document.querySelectorAll('#hide').forEach(function(element){
    element.style.display = 'none';
  });
  document.getElementById('display').innerHTML = 'Show';
  document.getElementById('display').onclick = show;
}
