const img = document.getElementById('img');
const buttons = document.getElementById('buttons')
colorIndex = 0;
intervalId = null;

function trafficLight(event) {
    stopAutomatic();
    turnOn[event.target.id]();
}

function changeColor() {
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

function nextIndex() {
    if(colorIndex < 2){
        colorIndex++;
    }else {
        colorIndex = 0;
    }
}

function stopAutomatic() {
    clearInterval(intervalId);
}


const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000),
}

buttons.addEventListener('click', trafficLight);





