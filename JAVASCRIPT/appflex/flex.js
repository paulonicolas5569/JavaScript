/**
 * APP Flex
 * @author Vitor Fialho Bergami
 */

//cria a função
function calcular() {
    //pega o valor do input e armazena em uma variavel
    let etanol = frmFlex.txtetanol.value //frmFlex é o id do forms
    alert(etanol)
    let gasolina = frmFlex.txtgasolina.value
    if (etanol < 0.7 * gasolina){
        document.getElementById("status").src="icons/etanol.png"
    }else{
        document.getElementById("status").src="icons/gasolina.png"
    }
}

function limpar(){
    document.getElementById("status").src="icons/neutro.png" /**getElementById serve para pegar o nome que voce colocou no html  e fazer o codigo no JS*/
}