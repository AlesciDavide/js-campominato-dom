const startGameButton = document.querySelector('button#startGame');
let valueClass = '';
let pointsAs = document.getElementById('punti_assegnati');


startGameButton.addEventListener('click', function(){
/* scelta difficoltà */
    let sceltaDifficoltaEl = document.getElementById("sceltaDifficolta")
    let difficulty = sceltaDifficoltaEl.value;
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
        let points = 0;
        pointsAs.innerHTML = (`Punti: ${points}`);
/* riempio un'array con le bombe generate casualmente */
    let arrayTotBombs = [];
        for(let i = 0; arrayTotBombs.length < 16; i++){
            arrayTotBombs[i] = checkBombNumber(arrayTotBombs, difficulty);
        }
        console.log(arrayTotBombs);
    
    

    const containerEl = document.createElement('section');
    containerEl.id= 'container';
    const myMainEl = document.querySelector('div#totalBlock')
    myMainEl.appendChild(containerEl);
    const mycontainerEl = document.querySelector('#container');
    
        for(let i = 0; i < difficulty; i++){
            let divElements = document.createElement('div');
            divElements.classList.add(valueClass, 'my_flex');
            divElements.append(i+1);
            mycontainerEl.appendChild(divElements);

            
            
            divElements.addEventListener('click', function(){
                console.log(divElements.classList.contains('bgActive_bomb', 'bgActive', 'end'));
                if(divElements.classList.contains('bgActive_bomb', 'bgActive', 'end') !== false){
                    return;
                }else{
                    console.log(i);
                    if(arrayTotBombs.includes(i+1) !== true && divElements.classList.contains('bgActive') !== true && divElements.classList.contains('end') !== true) {
                            divElements.classList.add('bgActive');
                            points +=1;
                            pointsAs.innerHTML = (`Punti: ${points}`);
                            console.log(i+1);
                    }else if(arrayTotBombs.includes(i+1) !== false){
                        divElements.classList.add('bgActive_bomb');
                        /* addBombActive(arrayTotBombs, valueClass); */
                        endGame(valueClass, arrayTotBombs, difficulty);
                            console.log(i+1);
                    }
                }
            })
        }
        
})



function generateNumberRandom(max){
    let num = Math.floor(Math.random() * ((max + 1) - 1)) + 1;
    return num;
};

function checkBombNumber(arrayBomb, max){
    let numberRandom;
    let isFound = false;

    while(!isFound){
        numberRandom = generateNumberRandom(max);
        if(arrayBomb.includes(numberRandom) === true){
            isFound = false;
        }else{
            isFound = true;
            return numberRandom;
        }
    }
    
};



function endGame(classe, array, difficolta){
    
    let allCells = document.getElementsByClassName(classe);
    for(let k = 0; k < difficolta; k++){
        allCells[k].classList.add('end');
    }
    console.log(allCells);
    console.log(array);
    for(let i = 0; i < 16; i++){
        console.log(allCells, array[i]);
        allCells[array[i]-1].classList.add('bgActive_bomb');
    }
    console.log(classe);
}