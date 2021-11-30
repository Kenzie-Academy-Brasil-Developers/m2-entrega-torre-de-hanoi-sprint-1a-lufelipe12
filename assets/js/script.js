// Apenas um disco pode ser movido por vez. 
// => IMPEDIR QUE O USUÀRIO CLIQUE EM MAIS DE UM DISCO POR TURNO/JOGADA.

// Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
// => DOIS CLIQUES, TORRE DE ORIGEM E TORRE DE DESTINO.

// Nenhum disco pode ser colocado no topo de um disco menor.
// => CONDIÇÂO PARA COMPARAR DISCO MAIOR E MENOR, MAIOR NÂO PODE FICAR EM CIMA DO MENOR.



const easyLevel = () => {
    towerOne.appendChild(discRed)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discBlue)
    main.appendChild(resetButton)
}

const mediumLevel = () => {
    towerOne.appendChild(discRed)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discBlue)
    towerOne.appendChild(discYellow)
    main.appendChild(resetButton)

}

const hardLevel = () => {
    towerOne.appendChild(discRed)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discBlue)
    towerOne.appendChild(discYellow)
    towerOne.appendChild(discOrange)
    main.appendChild(resetButton)

}


const easyButton = document.getElementById('easy')
const mediumButton = document.getElementById('medium')
const hardButton = document.getElementById('hard')

easyButton.addEventListener('click', easyLevel)
mediumButton.addEventListener('click', mediumLevel)
hardButton.addEventListener('click', hardLevel)




