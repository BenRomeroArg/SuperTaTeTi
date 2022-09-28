function player1 (tri){
    tri.classList.add('match');
    if("vibrate" in window.navigator){
        window.navigator.vibrate(300);
    }
}

function player2 (tri){
    tri.classList.add('ping');
}

const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', ()=>{
    
    window.location.reload();
});