
function calcularMedia(n1, n2, n3){
    var n1 = parseFloat(prompt("Digite o valor da primeira nota: "))
    var n2 = parseFloat(prompt("Digite o valor da segunda nota: "))
    var n3 = parseFloat(prompt("Digite o valor da terceira nota: "))
    var resultado = ((n1+n2+n3)/3).toFixed(1)
    if(n1 == null || n2 == null || n3 == null){
        return calcularMedia()
    }else{
        alert(resultado)
    }  
    if(resultado >= 7){
        alert("O aluno foi aprovado")
    }else if((resultado >= 4) || (resultado <= 6.9)){
        alert("O aluno está em recuperação..")
    }else{
        alert("O aluno foi reprovado")
    }
}
calcularMedia()
