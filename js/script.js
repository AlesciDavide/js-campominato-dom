const startGameButton = document.querySelector('button#startGame');



startGameButton.addEventListener('click', function(){

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

    const checkcontainerEl = document.getElementById('container');
        if(checkcontainerEl !== null){
            checkcontainerEl.remove();
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



