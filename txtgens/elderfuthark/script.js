var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');

ta1.addEventListener('keyup', catchText);

function catchText() {
  ta2.value = ta1.value;

  ta2.value = ta2.value.toLowerCase().replace(/aa/g, 1);
}
