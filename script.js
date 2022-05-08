const dinosaur = document.querySelector('.dinosaur');

function HandleKeyUp(event){
    if (event.keyCode === 32) Jump()
}

function Jump(){
    let position = 0;

    let upInterval = setInterval(() => {     
        if (position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
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

document.addEventListener('keyup', HandleKeyUp)