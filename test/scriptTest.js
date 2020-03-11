function translateEnglish()
	{
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {

		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("dovahTextArea").innerHTML='<textarea id="dragonText" class="input" style="width:99%; font-family:Palatino Linotype, Book Antiqua, Palatino, serif;" maxlength="500" cols="30" rows="10" value="">' + xmlhttp.responseText + '</textarea>';
			}
		  }
		var text = document.getElementById("englishText").value;

		xmlhttp.open("GET","translate-dragon.php?text="+text,true);

		xmlhttp.send();

		document.getElementById("dovahTextArea").innerHTML='<textarea id="dragonText" class="input" style="width:99%; font-family:Palatino Linotype, Book Antiqua, Palatino, serif;" maxlength="500" cols="30" rows="10" value="">Translating...</textarea>';
	}

	function translateDragon()
	{
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {

		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
			document.getElementById("englishTextArea").innerHTML='<textarea id="englishText" class="input" style="width:99%; font-family:Palatino Linotype, Book Antiqua, Palatino, serif;" maxlength="500" cols="30" rows="10" value="">' + xmlhttp.responseText + '</textarea>';
			}
		  }
		var text = document.getElementById("dragonText").value;

		xmlhttp.open("GET","translate-english.php?text="+text,true);

		xmlhttp.send();

		document.getElementById("englishTextArea").innerHTML='<textarea id="englishText" class="input" style="width:99%; font-family:Palatino Linotype, Book Antiqua, Palatino, serif;" maxlength="500" cols="30" rows="10" value="">Translating...</textarea>';
	}
