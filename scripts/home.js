$(function(){
	$("#clearBtn").click(clearOut);
	$("#loadBtn").click(makeItWork);
});

function makeItWork () {

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			tryingThis(xmlhttp);
		}
	}
	xmlhttp.open("GET", "sample.xml", true);
	xmlhttp.send();
	document.getElementById("Practice").style.display='block';
	
}
function tryingThis(xml) {

	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("title");
	document.getElementById("show-info").innerHTML = x[1].textContent;
	
}

function clearOut() {
	document.getElementById("show-info").innerHTML = "";
	document.getElementById("Practice").style.display='none';

}