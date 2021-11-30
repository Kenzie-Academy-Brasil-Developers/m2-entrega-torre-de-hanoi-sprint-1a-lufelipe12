// Apenas um disco pode ser movido por vez. 
// => IMPEDIR QUE O USUÀRIO CLIQUE EM MAIS DE UM DISCO POR TURNO/JOGADA.

// Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
// => DOIS CLIQUES, TORRE DE ORIGEM E TORRE DE DESTINO.

// Nenhum disco pode ser colocado no topo de um disco menor.
// => CONDIÇÂO PARA COMPARAR DISCO MAIOR E MENOR, MAIOR NÂO PODE FICAR EM CIMA DO MENOR.

// TABLE
const table = document.getElementById('main');

// TORRE
const towerOne = document.createElement('section');
towerOne.className = "tower";
const towerTwo = document.createElement('section');
towerTwo.className = "tower";
const towerThree = document.createElement('section');
towerThree.className = "tower";

// DISCOS
const discRed = document.createElement('div'); // DISCO 1 - Red
discRed.className = "discRed";
const discGreen = document.createElement('div'); // DISCO 2 - Green
discGreen.className = "discGreen";
const discBlue = document.createElement('div'); // DISCO 3 - Blue
discBlue.className = "discBlue";
const discYellow = document.createElement('div'); // DISCO 4 - Yellow
discYellow.className = "discYellow";
const discOrange = document.createElement('div'); // DISCO 5 - Orange
discOrange.className = "discOrange";

// ADD TOWERS INTO MAIN
table.appendChild(towerOne);
table.appendChild(towerTwo);
table.appendChild(towerThree);

// ADD DISCS INTO TOWERS





////// ADD FUNCTIONS AND FUNCTIONALITY FOR ELEMENTS /////
const resetDiv = document.getElementById('resetDiv')
const resetButton = document.createElement('button')
resetButton.id = 'reset'
resetButton.innerText = 'Reset'

let dificultyLevel = 0

const easyLevel = () => {
    towerOne.appendChild(discBlue)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discRed)
    resetDiv.appendChild(resetButton)
    dificultyLevel = 1
    easyButton.style.display = 'none'
    mediumButton.style.display = 'none'
    hardButton.style.display = 'none'
}

const mediumLevel = () => {
    towerOne.appendChild(discYellow)
    towerOne.appendChild(discBlue)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discRed)
    resetDiv.appendChild(resetButton)
    dificultyLevel = 2
    easyButton.style.display = 'none'
    mediumButton.style.display = 'none'
    hardButton.style.display = 'none'
}

const hardLevel = () => {
    towerOne.appendChild(discOrange)
    towerOne.appendChild(discYellow)
    towerOne.appendChild(discBlue)
    towerOne.appendChild(discGreen)
    towerOne.appendChild(discRed)
    resetDiv.appendChild(resetButton)
    dificultyLevel = 3
    easyButton.style.display = 'none'
    mediumButton.style.display = 'none'
    hardButton.style.display = 'none'
}


const easyButton = document.getElementById('easy')
const mediumButton = document.getElementById('medium')
const hardButton = document.getElementById('hard')

easyButton.addEventListener('click', easyLevel)
mediumButton.addEventListener('click', mediumLevel)
hardButton.addEventListener('click', hardLevel)

function resetGame() {
    easyButton.style.display = 'inline'
    mediumButton.style.display = 'inline'
    hardButton.style.display = 'inline'
    towerOne.innerHTML = ''
    towerTwo.innerHTML = ''
    towerThree.innerHTML = ''
    resetDiv.innerHTML = ''
}

resetButton.addEventListener('click', resetGame)

