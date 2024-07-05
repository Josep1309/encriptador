document.getElementById("encriptar").addEventListener("click", function() {
  var text = document.getElementById("myInput").value;
  document.getElementById('result_text').innerText = "Texto ingresado: " + text;
});
