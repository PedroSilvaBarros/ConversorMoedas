let form = document.getElementById("form");
let valorTaxa = document.getElementById("taxa");

function armazenaTaxa() {
  let vTaxa = valorTaxa.value;
  return vTaxa;
}

function validaInput() {
  let inputDolar = document.getElementById("dolar");
  let inputReal = document.getElementById("real");

  if (inputDolar > 0 && inputReal > 0) {
  } else {
  }
}

function ativarBtn() {
  let btnTaxa = document.getElementById("btTaxa");
  let btnReal = document.getElementById("btReal");
  document.getElementById("taxa").disabled = true;
  btnTaxa.disabled = true;
  btnReal.disabled = false;
}

function conversaoDolar() {
  let valTaxa = armazenaTaxa();
  let dolar = +form.dolar.value;

  let resultado = valTaxa * dolar;
  form.resultado.value = resultado;
}

function conversaoReal() {
  let taxa = +form.taxa.value;
  let real = +form.real.value;

  let resultado2 = real / taxa;
  form.resultado2.value = resultado2;
}

function btLimpar() {
  document.getElementById("taxa").value = "";
}
