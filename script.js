const dinosaur = document.querySelector('.dinosaur');
const background = document.querySelector('.background');
let itsJumping = false;
let position = 0;

function HandleKeyDown(event){
    if (event.keyCode === 32 && !itsJumping) Jump()
}

function Jump(){
    itsJumping = true;

    let upInterval = setInterval(() => {     
        if (position >= 200) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    itsJumping = false;
                }
                else {
                    position -= 20;
                    dinosaur.style.bottom = position + 'px';
                }
            }, 20);
        }
        else {
            position += 20;
            dinosaur.style.bottom = position + 'px';
        }
    }, 20);
}

function CreateCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 10000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML =  '<h1 class="gameOver">Fim de jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(CreateCactus, randomTime);
}

CreateCactus();
document.addEventListener('keydown', HandleKeyDown)