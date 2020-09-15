var ta1 = document.getElementById('ta1');
var ta2 = document.getElementById('ta2');
var shift = document.getElementById('shift');
var button = document.getElementById('button');
var lk;
var shifted;
var shiftedup;
var ta2str = '';
var ta1str = '';
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
  lk = shift.value;
  if (shift.value != '') {
    button.style.display = 'none';
  }
}

function unlock() {
  if (shift.value != lk) {
    charsmod = chars.slice();
    charsmodup = charsup.slice();
    button.style.display = 'inline-block';
  }
}

function setshift() {
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

function encode() {
  ta2.value = '';
  ta2str = '';
  ta2.value = ta1.value;
  for (i = 0 ; i < ta2.value.length ; i++) {
    indx = chars.indexOf(ta2.value[i]);
    indxup = charsup.indexOf(ta2.value[i]);
    if (chars.includes(charsmod[indx])) {
      ta2str = ta2str.concat(charsmod[indx]);
    } else {
      if (charsup.includes(charsmodup[indxup])) {
        ta2str = ta2str.concat(charsmodup[indxup]);
      } else {
        ta2str = ta2str.concat(ta2.value[i]);
      }
    }
  }
  ta2.value = ta2str;
}

function decode() {
  ta1.value = '';
  ta1str = '';
  ta1.value = ta2.value;
  for (i = 0 ; i < ta1.value.length ; i++) {
    indx = charsmod.indexOf(ta1.value[i]);
    indxup = charsmodup.indexOf(ta1.value[i]);
    if (charsmod.includes(chars[indx])) {
      ta1str = ta1str.concat(chars[indx]);
    } else {
      if (charsmodup.includes(charsup[indxup])) {
        ta1str = ta1str.concat(charsup[indxup]);
      } else {
        ta1str = ta1str.concat(ta1.value[i]);
      }
    }
  }
  ta1.value = ta1str;
}
