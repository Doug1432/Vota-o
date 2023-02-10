let num1 = 0;
let num2 = 0;
function resultado() {
document.getElementById("total").innerHTML = "total de votos em carro: " + num1;
document.getElementById("total2").innerHTML = "total de votos em moto: " + num2;
document.getElementById("total3").innerHTML = "total geral de votos: " + (num1 + num2);
}
function Carro(){
    num1++;
}
function Moto(){
    num2++;
}

