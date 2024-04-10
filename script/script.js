let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = parseInt(inputAdultos.value);
    let criancas = parseInt(inputCriancas.value);
    let duracao = parseInt(inputDuracao.value);

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML += `<p>${qdtTotalCarne / 1000}g de Carne </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)}ml de Cerveja </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebidas </p>`;
}

function carnePP(duracao) {
    return duracao >= 6 ? 650 : 400;
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200;
}

function bebidasPP(duracao) {
    return duracao >= 6 ? 1500 : 1000;
}
