let cube = document.querySelector('.cube');
const container = document.querySelector('.container');
const bar = document.querySelector('.bar');
const scoreElement = document.getElementById('score');

let score = 10;
scoreElement.textContent = score;

let id = null;
let barPosition = 0;
let cubePosition = 0;
let barPosition2= 175;
let cubePosition2 = 175;
let speed = 5;

let images = ["/falling_cube_images/fire.jpg",
            "/falling_cube_images/balun.jpg",
            "/falling_cube_images/bike.jpg",
            "/falling_cube_images/car.jpg",
            "/falling_cube_images/night.jpg"
        ];



let xPosition = 0;
let pos = 175;
let step = 5


function moveCube() {

    //moving with arrows
    document.addEventListener('keydown', (e) => {
        const containerWidth = container.clientWidth;
        const barWidth = bar.clientWidth;
        
        if (e.key === 'ArrowLeft' && pos >= step) {
            pos -= step;
        } else if (e.key === 'ArrowRight' && pos <= containerWidth - barWidth - step) {
            pos += step;
        }
        barPosition = pos + 'px';
        bar.style.left = barPosition; 
        barPosition2=pos;
        // bar.getBoundingClientRect()
    });


    let position = 0;
    clearInterval(id);
    id = setInterval(frame, speed);

function frame() {
    if (position === 431) {
        if(barPosition2 <= cubePosition2 + 50 && barPosition2 + 175 >= cubePosition2){
            score -= 2;
            scoreElement.textContent = score;
            position = 0 ;
        }else{
            score += 2;
            scoreElement.textContent = score;
            position = 0 ;
        }
         
        //random colors
        let randImages = Math.floor(Math.random() * images.length);
        let imgElement = cube.querySelector("img");
        imgElement.src = images[randImages];
        // cube.style.backgroundImage = `url('${colors[randColors]}')`
        
        //rand position
        let randPosition = Math.floor(Math.random() * 450)
        cubePosition = randPosition + 'px'
        cube.style.left = cubePosition
        cubePosition2 = randPosition;
        if(score === 0){
            clearInterval(id);
            alert("Game over");
            score = 10;
            scoreElement.textContent = score;
            id = setInterval(frame, speed);
        }
        else if(score === 18){
            // alert("Level 2 !!!")
            clearInterval(id);
            speed -= 3;
            id = setInterval(frame, speed);
        }
        else if(score === 20){
            // alert("Level 3!!!")
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











// let cube = document.querySelector('.cube');
// const container = document.querySelector('.container');
// const bar = document.querySelector('.bar');
// const scoreElement = document.getElementById('score');

// let score = 10;
// scoreElement.textContent = score;

// let id = null;
// let barPosition=0;
// let speed = 5;

// let colors = ["red","yellow","green","orange","rebeccapurple"]



// let xPosition = 0;

// let pos = 175;
// let step = 5
// function moveCube() {

//     //moving with arrows
//     document.addEventListener('keydown', (e) => {
//         const containerWidth = container.clientWidth;
//         const barWidth = bar.clientWidth;
        
//         if (e.key === 'ArrowLeft' && pos >= step) {
//             pos -= step;
//         } else if (e.key === 'ArrowRight' && pos <= containerWidth - barWidth - step) {
//             pos += step;
//         }
//         barPosition = pos + 'px';
//         bar.style.marginLeft = barPosition; 
//     });


//     let position = 0;
//     clearInterval(id);
//     id = setInterval(frame, speed);

// function frame() {
//     if (position === 431) {
//         // if(cubePosition >= barPosition && cubePosition + (50+'px') <= barPosition && cubePosition <= barPosition - (150+'px')){
//         //     score -= 2;
//         //     scoreElement.textContent = score;
//         //     position = 0 ;
//         // }
        
//         score -= 2;
//         scoreElement.textContent = score;
//         position = 0 ;
        
        
//         //random colors
//         let randColors = Math.floor(Math.random() * colors.length);
//         cube.style.background = colors[randColors]
        
//         //rand position
//         let randPosition = Math.floor(Math.random() * 450)
//         let cubePosition = randPosition + 'px'
//         cube.style.marginLeft = cubePosition
        

//         if(score === 18){
//             // alert("next level!!!")
//             clearInterval(id);
//             speed -= 3;
//             id = setInterval(frame, speed);
//         }
//     } else {
//             position++;
//             cube.style.top = position + 'px';
//             cube.style.down = position + 'px';
//         }
//     }
// }

// const startButton = document.getElementById('start');
// startButton.onclick = moveCube;






