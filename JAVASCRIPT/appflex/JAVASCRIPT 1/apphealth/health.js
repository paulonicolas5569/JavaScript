/**
 * App Health
 * @author Paulo Nicolas 
 */

//IMC ( indice de massa corporal)
//FCM ( frequencia cardiaca maxima )
//TMB ( taixa metabolica basal)
let peso, altura, idade, imc, fcm,tmb

function calcular(){
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = frmIMC.txtAltura.value

    //validação do formilario
    if (frmIMC.txtIdade.value === "") {
        alert("Informe a sua idade")
        frmIMC.txtIdade.focus()
    }else if (frmIMC.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmIMC.txtPeso.focus()
    }else if (frmIMC.txtAltura.value === "") {
        alert("Informe a sua Autura")
        frmIMC.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o seu Sexo")

    }else if (frmIMC.nivel.value === "") {
        alert("Selecione o nvel de atividade")
        frmIMC.nivel.focus


    }else{
         //IMC
    imc = peso / (altura * altura)
    document.getElementById("imc").innerHTML= (`IMC: ${imc.toFixed(2)}`)
    if(imc < 18.5){
        document.getElementById("status").innerHTML="Abaixo do peso"
        document.getElementById("grafico").src="icons/baixo.png"
    }else if (imc < 25 ){
        document.getElementById("status").innerHTML="Peso normal"
        document.getElementById("grafico").src="icons/normal.png"
    }else if (imc < 30 ){
        document.getElementById("status").innerHTML="Sobrepeso"
        document.getElementById("grafico").src="icons/sobrepeso.png"
    }else if (imc < 35 ){
        document.getElementById("status").innerHTML="Obesidade Grau 1"
        document.getElementById("grafico").src="icons/obesidade1.png"
    }else if (imc < 40 ){
        document.getElementById("status").innerHTML="Obesidade Grau 2"
        document.getElementById("grafico").src="icons/obesidade2.png"
    }else {
        document.getElementById("status").innerHTML="Obesidade Severa"
        document.getElementById("grafico").src="icons/obesidadeExtrema.png"
    }
    //FCM - formula de tanaka
    fcm = 208 - (0.7 * idade)
    document.getElementById("freq").innerHTML=(fcm)
    //TMB - formula de Harris Benedict
    //variaveis locais para capturar o conteudo (vetor)
    let select = document.getElementById("atividade")
    let opcaoValor = Number(select.options[select.selectedIndex].value)

    if (document.getElementById("m").checked === true) {
        tmb = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 *idade))) * opcaoValor
    }
    if(document.getElementById("f").checked === true) {
        tmb = (655 + (9.6 * peso ) + (1.8 * (altura*100 ) - (4.7 * idade ))) * opcaoValor
    }
    document.getElementById("calorias").innerHTML= tmb.toFixed(2)
  
    }
   
}

function limpar(){
    document.getElementById("imc").innerHTML=""
    document.getElementById("status").innerHTML=""
    document.getElementById("freq").innerHTML=""
    document.getElementById("grafico").scr="icons/reset.png"
    document.getElementById("calorias").innerHTML=""
}
