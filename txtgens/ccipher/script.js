var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');
var shift = document.getElementById('shift');
var button = document.getElementById('button');
var shifted;
var shiftedup;
var test = '';
var indx;
var indxup;
var i;

var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var charsmod = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var charsup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var charsmodup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// ta1.addEventListener('keyup', catchText);
shift.addEventListener('keyup', unlock)

function lock() {
  if (shift.value != '') {
    button.style.display = 'none';
  }
}

function unlock() {
  if (shift.value == '') {
    charsmod = chars.slice();
    charsmodup = charsup.slice();
    button.style.display = 'inline-block';
  }
}

function encrypt() {

  for (i = 0 ; i < Number(shift.value) ; i++) {
    shifted = charsmod[0];
    shiftedup = charsmodup[0];
    charsmod.shift();
    charsmodup.shift();
    charsmod.push(shifted);
    charsmodup.push(shiftedup);
  }
  lock();
  console.log(chars);
  console.log(charsup);
  console.log(charsmod);
  console.log(charsmodup);
}

function catchText() {
  ta2.value = '';
  test = '';
  ta2.value = ta1.value;
  for (i = 0 ; i < ta2.value.length ; i++) {
    indx = chars.indexOf(ta2.value[i]);
    indxup = charsup.indexOf(ta2.value[i]);
    if (chars.includes(charsmod[indx])) {
      test = test.concat(charsmod[indx]);
    } else {
      if (charsup.includes(charsmodup[indxup])) {
        test = test.concat(charsmodup[indxup]);
      } else {
        test = test.concat(ta2.value[i]);
      }
    }
  }
  ta2.value = test;
}
