// quando escrevemos window.document, temos varias opções. Vamos usar bastante tag name e id
// var titulo = window.document.write ("Qualquer coisa")
// window.document.write ("<h1>Olá Mundo</h1>")
// const p1 = window.document.getElementsByTagName("p")[0]
// p1.style.color = "pink"
// p1.style.backgroundColor = "purple"
// p1.style.fontSize = "45px"
// p1.innerHTML = "<h1>Meu primeiro parágrafo modificado com HTML</h1>" // o html é como se escrevesse na própria página do hmtl, diferente do innerText que só escreve um texto na página.
var nome = prompt("Qual seu nome?")
window.document.write (`<h1>Bem vindo, ${nome}!</h1>`)