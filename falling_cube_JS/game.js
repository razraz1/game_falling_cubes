
let cube = document.querySelector('.cube');
let score = 10;
const scoreElement = document.getElementById('score');
scoreElement.textContent = score;

let id = null;
let speed = 5;
let colors = ["red","yellow","green","orange","rebeccapurple"]

function moveCube() {
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, speed);

function frame() {
    if (position === 431) {
        score += 2;
        scoreElement.textContent = score;
        position = 0 ;

        // location();
        let rand = Math.floor(Math.random() * colors.length);
        cube.style.background = colors[rand]

        if(score === 18){
            // alert("next level!!!")
            clearInterval(id);
            speed -= 3;
            id = setInterval(frame, speed);
        }
    } else {
            position++;
            cube.style.top = position + 'px';
            cube.style.down = position + 'px';
        }
    }
}

const startButton = document.getElementById('start');
startButton.onclick = moveCube;


const bar = document.querySelector('.bar');
let xPosition = 175;


document.addEventListener('keydown', (e) => {
    if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        xPosition += (e.key === 'ArrowRight') ? 10 : -10;
        bar.style.left = xPosition +'px';

    }
})


