

//const elements = document.querySelector(".main-button")

//console.log (elements)

/*
console.log(element.textContent) // SÓ HTML
console.log(element.innerText)  // LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO e PERMITE ADICIONAR HTML diretamente
*/

//Eventos --> Sempre começam com o comando ON


const input = document.querySelector("#main-input")
const paragrapho = document.querySelector("paragraph-js")


function cliqueiNoBotao(){
    paragrapho.textContent= input.value

}
function digiteiNoInput(){
    console.log(input.value)
    
}


