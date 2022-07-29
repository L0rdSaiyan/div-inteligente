


function sob(){

    let elemento = document.getElementById("btn")
    elemento.innerHTML = "<h2>JÁ FALEI </h2> <h2>PARA NÃO</h2> <h2>CLICAR!</h2>"
    elemento.style.backgroundColor = 'red'
    elemento.style.color = 'white'

}

function sair(){

    let elemento = document.getElementById("btn")
    setTimeout(sair2, 0);
    setTimeout(sair3, 2000)

}


function sair2(){

    let elemento = document.getElementById("btn")
    elemento.innerHTML = "<h2>ISSO,VAZA MESMO!</h2>"
    elemento.style.color = 'blue'
    elemento.style.backgroundColor = 'black'

}

function sair3(){
    let elemento = document.getElementById("btn")
    elemento.innerHTML = "<h2>NÃO CLIQUE</h2> <h2>EM</h2> <h2>MIM!</h2>"
    elemento.style.backgroundColor = 'black'
    elemento.style.color = 'red'


}


function segurar(){

    let elemento = document.getElementById("btn")

    elemento.style.backgroundColor = 'yellow'
    elemento.style.color = 'red'
    elemento.innerHTML = "<h2>KOÉ MANÉ, ME SOLTA!</h2>"


}

function soltar(){

let elemento = document.getElementById("btn")
elemento.innerHTML = "<h2>UFA! NÃO FAÇA</h2> <h2>DE NOVO!</h2>"
elemento.style.backgroundColor = 'green';
elemento.style.color = 'white'


}

function cocegas(){

let elemento = document.getElementById("btn")
elemento.style.backgroundColor = 'blue'
elemento.innerHTML = "<h2>KKKK PARA!</h2> <h2>FAZ COSCA</h2>"


}