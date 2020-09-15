var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

ta1.addEventListener('keyup', catchText);

function catchText() {
  ta2.value = ta1.value;

  ta2.value = ta2.value.toLowerCase().replace(/aa/g, 1);
  ta2.value = ta2.value.toLowerCase().replace(/ii/g, 3);
  ta2.value = ta2.value.toLowerCase().replace(/oo/g, 8);
  ta2.value = ta2.value.toLowerCase().replace(/uu/g, 5);
  ta2.value = ta2.value.toLowerCase().replace(/ah/g, 4);
  ta2.value = ta2.value.toLowerCase().replace(/ei/g, 2);
  ta2.value = ta2.value.toLowerCase().replace(/ey/g, 9);
  ta2.value = ta2.value.toLowerCase().replace(/ir/g, 7);
  ta2.value = ta2.value.toLowerCase().replace(/ur/g, 6);

  ta2.value = ta2.value.toLowerCase().replace(/a'a/g, 1);
  ta2.value = ta2.value.toLowerCase().replace(/i'i/g, 3);
  ta2.value = ta2.value.toLowerCase().replace(/o'o/g, 8);
  ta2.value = ta2.value.toLowerCase().replace(/u'u/g, 5);
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
