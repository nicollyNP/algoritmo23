function imc() {

    let peso = parseFloat(prompt("Digite seu peso (kg):"));
    let altura = parseFloat(prompt("Digite sua altura (m):"));

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        return "Peso ou altura inválidos!";
    }

    let indice = peso / (altura * altura);
    let classificacao = "";

    if (indice < 18.5) {
        classificacao = "Magreza";
    } else if (indice >= 18.5 && indice <= 24.9) {
        classificacao = "Normal";
    } else if (indice >= 25 && indice <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (indice >= 30 && indice <= 39.9) {
        classificacao = "Obesidade";
    } else {
        classificacao = "Obesidade Grave";
    }

    return "Índice IMC: " + indice.toFixed(2) +
           "<br>Classificação: " + classificacao;
}

document.getElementById("resultado").innerHTML = imc();