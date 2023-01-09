function selecionarprato(pratothis){
    const selecionados = document.querySelector('.salgados .selecionado');
    if (selecionados !== null){ 
        selecionados.classList.remove('selecionado');
    }
    pratothis.classList.add('selecionado');
    ativarPedido()
}

function selecionarpratodois(pratothisdois){
    const selecionadosdois = document.querySelector('.liquidos .selecionado');
    if (selecionadosdois !== null){ 
        selecionadosdois.classList.remove('selecionado');
    }
    pratothisdois.classList.add('selecionado');
    ativarPedido()
}

function selecionarpratotres(pratothistres){
    const selecionadostres = document.querySelector('.doces .selecionado');
    if (selecionadostres !== null){ 
        selecionadostres.classList.remove('selecionado');
    }
    pratothistres.classList.add('selecionado');
    ativarPedido()
}

function ativarPedido(){
 const botao = document.querySelector('.aqui');
 const salgado = document.querySelector('.salgados .selecionado')
 const bebida = document.querySelector('.liquidos .selecionado')
 const sobremesa = document.querySelector('.doces .selecionado')
 if (salgado && bebida && sobremesa) {
    botao.classList.add('fundoBotao');
    botao.innerHTML = "Fechar pedido";
    botao.disabled = false;
 }
}

let texto; 
function enviarPedido(){
let nome = prompt("Qual é o seu nome completo?");
let endereço = prompt("Qual é o seu endereço completo, com CEP?");
let formaPgto = prompt("Qual será a forma de pagamento? Aceitamos cartões de crédito e débito")
const nomePrato = document.querySelector('.salgados .selecionado .nome-prato').innerHTML
const nomeBebida = document.querySelector('.liquidos  .selecionado .nome-prato').innerHTML
const nomeSobremesa = document.querySelector('.doces .selecionado .nome-prato').innerHTML
let precoPrato = document.querySelector('.salgados .selecionado .preco').innerHTML
let precoBebida = document.querySelector('.liquidos  .selecionado .preco').innerHTML
let precoSobremesa = document.querySelector('.doces .selecionado .preco').innerHTML
precoPrato = precoPrato.replace("R$", "").replace(",", ".")
precoBebida = precoBebida.replace("R$", "").replace(",", ".")
precoSobremesa = precoSobremesa.replace("R$", "").replace(",", ".")
const soma = (Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)
let texto = `Olá, gostaria de fazer o pedido: \n\n`
+ `%0a- Prato: ${nomePrato} \n`
+ `%0a- Bebida: ${nomeBebida} \n`
+ `%0a- Sobremesa: ${nomeSobremesa} \n`
+ `%0a Total R$ ${soma} \n`
+ `%0a -----------------\n`
+ `%0a Informações: \n\n`
+ `%0a- Nome: ${nome} \n`
+ `%0a- Endereço: ${endereço} \n`
+ `%0a- Forma de Pagamento: ${formaPgto} \n`;
 let whatsapp = window.encodeURIComponent(texto);window.open("https://api.whatsapp.com/send?phone="+5511999999999+"&text="+texto, "_blank");
}
