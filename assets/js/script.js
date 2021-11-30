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