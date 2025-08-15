function calcular() {
  var kcal = parseInt(document.getElementById("kcal").value);
  var tipo = document.getElementById("tipo").value;
  var resultado = "";
  if (isNaN(kcal) || kcal <= 0) {
    resultado = "Ingrese un valor válido de kcal/h";
  } else {
    if (tipo === "sin") {
      // sin conducto
      if (kcal > 0) {
        if (kcal > 0 && kcal <= 10000) {
          resultado = "Rejilla mínima: 50 cm² (o 100 cm² comercial).";
        } else {
          resultado = "Para cocinas con horno y 3+ hornallas: 100 cm². Otros: 50 cm².";
        }
      }
    } else {
      // con conducto
      if (kcal <= 10000) {
        resultado = "Rejilla mínima: 50 cm².";
      } else if (kcal <= 40000) {
        var extra = Math.ceil((kcal - 10000) / 1000) * 3;
        var total = 50 + extra;
        resultado = "Rejilla mínima: " + total + " cm² (use 100 o 200 cm² comerciales).";
      } else {
        resultado = "Para más de 40.000 kcal/h consultar tabla completa.";
      }
    }
  }
  document.getElementById("resultado").innerText = resultado;
}