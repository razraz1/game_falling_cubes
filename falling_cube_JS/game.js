
const cube = document.querySelector('.cube');
let score = 10;
const scoreElement = document.getElementById('score');
scoreElement.textContent = score;

let id = null;
let speed = 5;
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
        // fast();
        // randColor();

        if(score === 14){
            // alert("next level!!!")
            clearInterval(id);
        }
        } else {
            position++;
            cube.style.top = position + 'px';
            cube.style.down = position + 'px';
        }
    }
}

let colors = ["red","yellow","green","orange","rebeccapurple"]


const startButton = document.getElementById('start');
startButton.onclick = moveCube;































// const bar = document.querySelector('.bar');

// document.addEventListener('keydown', (event) => {
//     const step = 10;

//     switch (event.key) {
//         case 'ArrowLeft':
//             moveElement(bar, -step, 0);
//             break;
//         case 'ArrowRight':
//             moveElement(bar, step, 0);
//             break;
//         default:
//             break;
//     }
// });

// function moveElement(element, X, Y) {
//     const rect = element.getBoundingClientRect();
//     const newX = rect.left + X;
//     const newY = rect.top + Y;

//     const containerRect = document.querySelector('.container').getBoundingClientRect();

//     if (newX >= containerRect.left && newX + rect.width <= containerRect.right) {
//         element.style.left = `${newX}px`;
//     }

//     if (newY >= containerRect.top && newY + rect.height <= containerRect.bottom) {
//         element.style.top = `${newY}px`;
//     }
// }
