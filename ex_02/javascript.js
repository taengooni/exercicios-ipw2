const btAdic = document.getElementById("btAdic");
const inputNum = document.getElementById("inputNum");
const inputSoma = document.getElementById("inputSoma");
const inputMedia = document.getElementById("inputMedia");
let somatorio = 0;
let count = 0;


btAdic.onclick = () => {
  let num = parseInt(inputNum.value);
  if (isNaN(num)) {
    alert("Digite um número inteiro!");
    return;
  }

  somatorio += num;
  count++;
  let media = somatorio / count;
  inputSoma.value = somatorio;
  inputMedia.value = media.toFixed(2);
  inputNum.value = "";
  inputNum.focus();
};