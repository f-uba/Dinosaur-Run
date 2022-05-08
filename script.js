const dinosaur = document.querySelector('.dinosaur');
const background = document.querySelector('.background');
let itsJumping = false;

function HandleKeyUp(event){
    if (event.keyCode === 32 && !itsJumping) Jump()
}

function Jump(){
    let position = 0;
    itsJumping = true;

    let upInterval = setInterval(() => {     
        if (position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0){
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

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}

CreateCactus();
document.addEventListener('keyup', HandleKeyUp)