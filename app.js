const p1 = {
    score : 0,
    button : document.querySelector('#P1Button'),
    display : document.querySelector('#P1Display')
}
const p2 = {
    score : 0,
    button : document.querySelector('#P2Button'),
    display : document.querySelector('#P2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

let winningscore = 3;
let isGameOver = false;

function updateScore(player,oppnent){
    if(!isGameOver){
        player.score += 1;
        if (player.score === winningscore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oppnent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oppnent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1,p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2,p1);
})

winningScoreSelect.addEventListener('change', function(){
    winningscore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset) 

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
    p.score = 0;
    p.display.textContent = "0";
    p.display.classList.remove('has-text-success','has-text-danger');
    p.button.disabled = false;
    }
  

}