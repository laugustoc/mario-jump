const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem')
const gameOver = document.querySelector('.acabou')
const somPulo = document.querySelector('.som-pulo')
const somMorte = document.querySelector('.som-morte')
const frame = document.querySelector('.game-board')
const placar = 0;
const somJogo = document.querySelector('.som-jogo');
let count = 0;

const jump = function pulo () {
    mario.classList.add('jump')
    somPulo.play();

    setTimeout(()=> {
        
        mario.classList.remove ('jump');

    }, 700);
}


const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace ('px', '');//A PROPRIEDADE BOTTOM NÃO EXISTE NA VERIFICAÇÃO DO JS, POR ISSO NÃO PODEMOS VERIFICAR A IMAGEM DO MARIO COMO VERIFICAMOS A DO TUBO. DEVE SER USADO O COMANDO WINDOW. GETCOMPUTEDSTYLE, QUE PEGA TUDO O QUE FOI COMPUTADO NAQUELE ELEMENTO SEGUNDO O QUE COLOCAMOS NO CSS. O REPLACE É PARA REMOVER O PX DO RESULTADO//
    const nuvemPosition = nuvem.offsetLeft 

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105)   {

        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        nuvem.style.animation = 'none'
        nuvem.style.left = `${nuvemPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        somJogo.pause();
        somMorte.play();        
        
        

        setTimeout(()=>{gameOver.style.display = 'block'}, 2500)

        clearInterval(loop);
    }

}, 10);


document.addEventListener ('click', jump);
document.addEventListener ('keydown', (tecla)=>{
    if(tecla.code==="Space") {
        jump();
    }
});
