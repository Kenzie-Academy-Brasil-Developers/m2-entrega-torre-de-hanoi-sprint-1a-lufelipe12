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
    dificultyLevel = 3
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
    dificultyLevel = 4
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
    dificultyLevel = 5
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
    dificultyLevel = 0
    whatClick = 'first'
    discWidth = 0
}

resetButton.addEventListener('click', resetGame)

let whatClick = 'first'

const clickMarker = () => {
    if (whatClick === 'first') {
        whatClick = 'second'
    } else {
        whatClick = 'first'
    }
}

towerOne.addEventListener('click', () => {

    if (whatClick === 'first' && towerOne.childElementCount > 0) {
        clickMarker()
        saveDiscoAux(towerOne);
        removeDisc(towerOne);
    } else if ((whatClick === 'second' && towerOne.childElementCount === 0) || (whatClick === 'second' && sizeOfChilds(towerOne) === true)) {
        clickMarker()
        addDisc(towerOne);
    }
})

towerTwo.addEventListener('click', () => {

    if (whatClick === 'first' && towerTwo.childElementCount > 0) {
        clickMarker()
        saveDiscoAux(towerTwo);
        removeDisc(towerTwo);
    } else if ((whatClick === 'second' && towerTwo.childElementCount === 0) || (whatClick === 'second' && sizeOfChilds(towerTwo) === true)) {
        clickMarker()
        addDisc(towerTwo);
        isWin(towerTwo)
    }
})

towerThree.addEventListener('click', () => {

    if (whatClick === 'first' && towerThree.childElementCount > 0) {
        clickMarker()
        saveDiscoAux(towerThree);
        removeDisc(towerThree);
    } else if ((whatClick === 'second' && towerThree.childElementCount === 0) || (whatClick === 'second' && sizeOfChilds(towerThree) === true)) {
        clickMarker()
        addDisc(towerThree);
        isWin(towerThree)
    }
})

// REMOVER DISCO

// REMOVER DISCO
// 1. Clicar na torre
// 2. Clicar no disco

// ADICIONAR DISCO
// 3. Clicar na torre que vai receber o disco

let discoAux
let discWidth = 0

const removeDisc = (towerNumber) => {
    towerNumber.lastElementChild.remove();
}

const saveDiscoAux = (towerNumber) => {
    discWidth = towerNumber.lastElementChild.clientWidth
    discoAux = towerNumber.lastElementChild;
}

const addDisc = (towerNumber) => {
    towerNumber.appendChild(discoAux);
}

///// REGRAS DE NEGÓCIO /////

const sizeOfChilds = (towerNumber) => {
    if (towerNumber.lastElementChild.clientWidth > discWidth) {
        return true
    }
    alert('Tente outra jogada')
    return false
}

const isWin = (towerNumber) => {
    if (towerNumber.childElementCount === dificultyLevel) {
        setTimeout(function () {
            alert("Você venceu")
        }, 800)
    }

}