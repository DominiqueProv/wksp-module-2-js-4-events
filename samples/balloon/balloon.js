


const balloon = document.getElementById('balloon');
let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`

const INCREMENT = 2
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const MAX_EXPLOSION_SIZE = 1000;

function handleKeydown(event){

    // if "arrow up"
    if (event.key === 'ArrowUp'){
    
        // balloon bigger
        balloonSize += INCREMENT;
        balloon.style.fontSize = `${balloonSize}px`
        // if balloon is gigger than x

        if(balloonSize > MAX_SIZE ){
        // remove event listener
        document.removeEventListener('keydown', handleKeydown);
        // remove the balloon / add in explosion
        balloon.innerText = '💥';
        // explosion grows incrementally
        
        const explosion = setInterval(function(){

            balloonSize += 50;
            balloon.style.fontSize = `${balloonSize}px`;
        // if explosion size is y 
            if (balloonSize > MAX_EXPLOSION_SIZE){
        // stop growing 

            clearInterval(explosion);
        // fadeout
            balloon.style.opacity = 0;
            }
        }, 20);
    }
                
            

    } else if (event.key === 'ArrowDown'){
        // if balloon is bigger than z
    
        if(balloonSize > MIN_SIZE){
        
        // balloon smaller
            balloonSize -= INCREMENT;
            balloon.style.fontSize = `${balloonSize}px`;
            }
    }

}

// event listener that listen for keydown event (add always at the end of the code)
document.addEventListener('keydown', handleKeydown);