const startGameButton = document.querySelector('button#startGame');



startGameButton.addEventListener('click', function(){
/* scelta difficoltà */
    let sceltaDifficoltaEl = document.getElementById("sceltaDifficolta")
    let difficulty = sceltaDifficoltaEl.value;
    let valueClass = '';
    if(difficulty == "semplice"){
        difficulty = 100;
        valueClass = 'elements_semplice';
    }else if(difficulty == "normale"){
        difficulty = 81;
        valueClass = 'elements_normale';
    }else{
        difficulty = 49;
        valueClass = 'elements_difficile';
    }
/* se è già presente rimuovo la vecchia griglia con tutti i figli */

    const checkcontainerEl = document.getElementById('container');
        if(checkcontainerEl !== null){
            checkcontainerEl.remove();
        }

/* riempio un'array con le bombe generate casualmente */
let arrayTotBombs = [];
for(let i = 0; arrayTotBombs.length < 16; i++){
    arrayTotBombs[i] = checkBombNumber(arrayTotBombs, 100);
}


    const containerEl = document.createElement('section');
    containerEl.id= 'container';
    const myMainEl = document.querySelector('main')
    myMainEl.appendChild(containerEl);
    const mycontainerEl = document.querySelector('#container');
        for(let i = 0; i < difficulty; i++){
            let divElements = document.createElement('div');
            divElements.classList.add(valueClass, 'my_flex');
            divElements.append(i+1);
            mycontainerEl.appendChild(divElements);
            divElements.addEventListener('click', function(){
                divElements.classList.add('bgActive');
                console.log(i+1);
            })
        }
})







function generateNumberRandom(max){
    return Math.floor(Math.random() * ((max + 1) - 1)) + 1;
}

function checkBombNumber(arrayBomb, max){
    let numberRandom;
    let isFound = false;

    while(!isFound){
        numberRandom = generateNumberRandom(max);
        /* console.log(numberRandom); */
        if(arrayBomb.includes(numberRandom) !== false){
            isFound = true;
        }else{
            return numberRandom;
        }
    }
}

