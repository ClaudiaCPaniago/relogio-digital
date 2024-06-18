const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  // Remove qualquer classe de período anterior
  document.body.classList.remove("manha", "tarde", "noite");

  // Determine o período do dia e adicione a classe correspondente
  if (hr >= 6 && hr < 12) {
    document.body.classList.add("manha");
  } else if (hr >= 12 && hr < 18) {
    document.body.classList.add("tarde");
  } else {
    document.body.classList.add("noite");
  }
});
