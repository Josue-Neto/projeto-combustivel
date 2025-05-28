function calcular() {
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);

    // Mensagem de aviso para inserir corretamente os valores
    if (isNaN(etanol) || isNaN(gasolina) || etanol <= 0 || gasolina <= 0) {
    alert("Por favor, insira valores válidos para ambos os combustíveis.");
    return;
}

    // Calcular o valor com mensagem
    let resultado = etanol / gasolina;

    if (etanol <= 0.70 * gasolina) {
        document.getElementById('status').src = "./img/tanqueEtanol.png";
        document.getElementById("mensagem").innerHTML = `Recomendamos abastecer com <strong style="color:limegreen;">Etanol</strong>, pois está mais vantajoso nesta comparação.`;
    } else {
        document.getElementById('status').src = "./img/tanqueGasolina.png";
        document.getElementById("mensagem").innerHTML = `Recomendamos abastecer com <strong style="color:gold;">Gasolina</strong>, pois o etanol não está compensando...`;
}
}

// Função Limpar
function limpar() {
    document.getElementById('status').src= './img/tanque.png';
    document.getElementById('mensagem').innerHTML= '';
    document.getElementById('etanol').value= '';
    document.getElementById('gasolina').value= '';
}