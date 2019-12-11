var bold
var strike
var italic
var color
var loreTF
var enchTF
var enchLevel
var fullCmd

// Copy text
function copy(txt) {
  // var txt = document.getElementById('fullCmd');

	// var txt = document.getElementById('testCopy');

	txt.select();

  document.execCommand('copy');

	alert('Copied command.');
}

function deselectAll() {
  var element = document.activeElement;

  if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
    if ('selectionStart' in element) {
      element.selectionEnd = element.selectionStart;
    }
    element.blur();
  }

  if (window.getSelection) { // All browsers, except IE <=8
    window.getSelection().removeAllRanges();
  } else if (document.selection) { // IE <=8
    document.selection.empty();
  }
}

function selectText(element) {
    var doc = document;
    var text = doc.getElementById(element);

    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
		doc.execCommand('copy');
		deselectAll();
		alert('Copied command.');
}

// Get italic value
function getItal(val) {
	italic = val;
}

// Get bold value
function getBold(val) {
	bold = val;
}

// Get strikethrough value
function getStrike(val) {
	strike = val;
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

var slctClr = document.querySelector('select');
slctClr.addEventListener('click', sameClr);

function sameClr() {
	if (slctClr.value == 'dark_red') {
		slctClr.id = 'dark-red';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'red') {
		slctClr.id = 'red';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'gold') {
		slctClr.id = 'gold';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'yellow') {
		slctClr.id = 'yellow';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'dark_green') {
		slctClr.id = 'dark-green';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'green') {
		slctClr.id = 'green';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'aqua') {
		slctClr.id = 'aqua';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'dark_aqua') {
		slctClr.id = 'dark-aqua';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'dark_blue') {
		slctClr.id = 'dark-blue';
		slctClr.style.backgroundColor = '#454545';
	} else if (slctClr.value == 'blue') {
		slctClr.id = 'blue';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'light_purple') {
		slctClr.id = 'pink';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'dark_purple') {
		slctClr.id = 'purple';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'white') {
		slctClr.id = 'white';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'gray') {
		slctClr.id = 'gray';
		slctClr.style.backgroundColor = '#191919';
	} else if (slctClr.value == 'dark_gray') {
		slctClr.id = 'dark-gray';
		slctClr.style.backgroundColor = '#111111';
	} else if (slctClr.value == 'black') {
		slctClr.id = 'black';
		slctClr.style.backgroundColor = '#454545';
	}
}

// var defaultSelect = document.querySelector('select:first-child');

// defaultSelect.addEventListener('click', hide);

function hide(e) {
	console.log('Hidden');
	document.getElementById('defSlct').className = 'def-select';
}

function chng() {
	document.body.style.backgroundColor = "red";
}

// Create command
function cmd() {
  // Declare variables
	item = document.getElementById('item').value;
	amnt = document.getElementById('amnt').value;
	name = document.getElementById('name').value;
	lore = document.getElementById('lore').value;
	ench = document.getElementById('ench').value;
	enchLevel = document.getElementById('enchLevel').value;

	var clrSlct = document.getElementById('clr').value;
	var slctFirstCld = document.querySelector('select:first-child');

  // If there are no enchantments
	if (ench == '') {
		enchTF = false;
	} else {
		enchTF = true;
	}

  // If there is no lore
	if (lore == '') {
		loreTF = false
	} else {
		loreTF = true
	}

  // If no item picked
	if (item == '') {
		item = 'diamond_sword';
	}

  // If no amount
	if (amnt == '') {
		amnt = 1;
	}

  // If no given name
	if (name == '') {
		name = 'Diamond Sword';
	}

  // If no italic
	if (italic == undefined) {
		italic = 'false';
	}

  // If no bold
	if (bold == undefined) {
		bold = 'false';
	}

  // If no strikethrough
	if (strike == undefined) {
		strike = 'false';
	}

  // If no color
	// if (clrSlct != 'defSlct') {
		// color = 'white';
		// document.getElementById('defSlct').innerHTML = '';
		// slctFirstCld.innerHTML = '';
		// document.getElementById('defSlct').className = 'def-select';
		// console.log(123);
	// }

	// Choose to create with or without enchantments and/or lore

	// No lore and no enchantments
	if (loreTF == false && ench == false) {
		document.getElementById('cmd').innerHTML = '<div id=\'output\' class=\'div\'><p>' +
		'Your command is:<br></p>' +
    '<p id=\'fullCmd\'>/give @p ' + item + '{display:{Name:' +
    '"[{\\"text\\": \\"' + name +
    '\\", \\"bold\\":' + bold +
    ', \\"strikethrough\\":' + strike +
    ', \\"italic\\":' + italic +
    ', \\"color\\": \\"' + clrSlct +
    '\\"}]"}} ' + amnt +
		'</p> <button onclick=\'selectText("fullCmd")\' class=\'btn\'>Copy</button></div>';
	}

	// Lore and enchantments
	if (loreTF == true && enchTF == true) {
		document.getElementById('cmd').innerHTML = '<div id=\'output\' class=\'div\'><p>' +
		'Your command is:<br></p>' +
    '<p id=\'fullCmd\'>/give @p ' + item + '{display:{Name:' +
    '"[{\\"text\\":\\"' + name +
    '\\", \\"bold\\":' + bold +
    ', \\"strikethrough\\":' + strike +
    ', \\"italic\\":' + italic +
    ', \\"color\\": \\"' + clrSlct +
    '\\"}]", Lore:["\\"'+ lore +
    '\\""]}, Enchantments:[{id:' + ench +
    ', lvl:' + enchLevel +
    '}]} ' + amnt +
		'</p> <button onclick=\'selectText("fullCmd")\' class=\'btn\'>Copy</button></div>';
	}

  // If there is lore, and there are no enchantments
	if (loreTF == true && enchTF == false) {
		document.getElementById('cmd').innerHTML = '<div id=\'output\' class=\'div\'><p>' +
		'Your command is:<br></p>' +
		'<p id=\'fullCmd\'>/give @p ' + item + '{display:{Name:' +
		'"[{\\"text\\": \\"' + name +
		'\\", \\"bold\\":' + bold +
		', \\"strikethrough\\":' + strike +
		', \\"italic\\":' + italic +
		', \\"color\\": \\"' + clrSlct +
		'\\"}]", Lore:["\\"' + lore +
		'\\""]}} ' + amnt +
		'</p> <button onclick=\'selectText("fullCmd")\' class=\'btn\'>Copy</button></div>';
	}

  // If there are enchantments, but no lore
	if (loreTF == false && enchTF == true) {
		document.getElementById('cmd').innerHTML = '<div id=\'output\' class=\'div\'><p>' +
		'Your command is:<br></p>' +
		'<p id=\'fullCmd\'>/give @p ' + item + '{display:{Name:' +
		'"[{\\"text\\": \\"' + name +
		'\\", \\"bold\\":' + bold +
		', \\"strikethrough\\":' + strike +
		', \\"italic\\":' + italic +
		', \\"color\\": \\"' + clrSlct +
		'\\"}]"}, Enchantments:[{id:' + ench +
		', lvl:' + enchLevel +
		'}]} ' + amnt +
		'</p> <button onclick=\'selectText("fullCmd")\' class=\'btn\'>Copy</button></div>';
	}

  fullCmd = document.getElementById('cmd');
}

fullCmd = document.getElementById('cmd');

function copyCmd() {
  fullCmd.select();

  document.execCommand("copy");

  alert('Copied: ' + fullCmd.innerTEXT);
}
