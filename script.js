// while
// do/while
// for

// Crie uma lista com 5 nomes usando um while

// Matriz
let lista = ['banana' , 'maça' , ' kiwi' , 'morangos' , 'laranja']


//lista,array, vetor, matriz
let listasDeListas  = [ 
    ['banana' , 'maça' , ' kiwi' , 'morangos' , 'laranja']
    ['banana' , 'maça' , ' kiwi' , 'morangos' , 'laranja']
    ['banana' , 'maça' , ' kiwi' , 'morangos' , 'laranja']
]
//Cria uma variável de contador
let posicao = 0
//Cria uma lista não ordenada 
const listaEmTela = document.createElement("ol")

//while= enquanto (condição verdadeira) faça alguma coisa
while(posicao <= lista.length){
    console.log(lista [posicao])
    const itemLista = document.createElement("li")
    intemLista.textContent = lista[posicao]
    listaEmTela.appendChild(intemLista)
    posicao = posicao + 1
    
}
document.body.appendChild(listaEmTela)