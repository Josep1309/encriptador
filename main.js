/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

document.getElementById("encriptar").addEventListener("click", function() {
  var inputValue = document.getElementById("myInput").value;
  var encriptedText = inputValue.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  document.getElementById("result_text").innerHTML = encriptedText;

  document.getElementById("copy").style.display = "block";
  document.getElementById("image_result").style.display = "none";
  document.getElementById("result_title").style.display = "none";
  document.getElementById("resukt_section").style.justifyContent = "flex-start";
});

document.getElementById("desencriptar").addEventListener("click", function() {
  var inputValue = document.getElementById("myInput").value;
  var desencriptedText = inputValue.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  document.getElementById("result_text").innerHTML = desencriptedText;

  document.getElementById("image_result").style.display = "none";
  document.getElementById("result_title").style.display = "none";

  document.getElementById("copy").style.display = "block";
  document.getElementById("result_section").style.justifyContent = "space-between";
  document.getElementById("result_text").style.textAlign = "start";
  document.getElementById("result_text").style.fontSize = "1.5rem";
  document.getElementById("result_text").style.margin = "2rem";
});

document.getElementById("copy").addEventListener("click", function() {
  var textToCopy = document.getElementById("result_text").innerHTML;
  navigator.clipboard.writeText(textToCopy);
  alert("Texto copiado al portapapeles");
});