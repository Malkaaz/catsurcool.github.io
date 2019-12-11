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