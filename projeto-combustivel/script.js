let etanol;
let gasolina;
let resultado;
function calcular() {
    let etanol = parseFloat(document.getElementById('etanol').value);
    let etanol = parseFloat(document.getElementById('gasolina').value);

    let resultado = etanol / gasolina; // Calcular o valor

    if (etanol <= 0.70 * gasolina) {
        document.getElementById('status').src = "./img/tanqueEtanol.png";
    } else {
        document.getElementById('status').src = "./img/tanqueGasolina.png";
}
document.getElementById("mensagem").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}
//Função Limpar
function limpar() {
    document.getElementById('status').src= './img/tanque.png';
    document.getElementById('mensagem').innerHTML= '';
    document.getElementById('etanol').value= '';
    document.getElementById('gasolina').value= '';
}