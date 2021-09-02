var produto1 = Number(prompt("Digite o valor do produto: "))
var produto2 = Number(prompt("Digite o valor do outro produto: "))


if(produto1 == produto2){
  var desconto = (produto1 + produto2 - 5)
  alert("O valor com desconto é: " + desconto)
}else{
    var semdesconto = (produto1 + produto2)
    alert("O valor sem desconto é: " + semdesconto)
}
 