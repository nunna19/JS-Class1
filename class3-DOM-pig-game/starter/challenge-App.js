//Challenge

var scores, roundScores, activePlayers, gamePlayer, setWinScore; //dice; 
init();

var lastDice;
//dice = Math.floor(Math.random() * 6) + 1; // Math.floor take out decimal of math.random /math.random * 6 mean=0,1,2,3,4,5 so we need to + 1 to have 0,1,2,3,4,5,6

//** querySelector this called setter because set the valuse
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';


//** Ex.another way use querySelector called getter the values not setter the values.
//var x = document.querySelector('#score-0').textContent; // or .inerHtml;
//console.log(x);


//change values to be 0
init();

//in put set win score
setWinScore = document.querySelector('.btn-win-score');



//Event and even handing rolling the dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlayer) {
        //1. random number
        var diceRandom1 = Math.floor(Math.random() * 6) + 1;
        var diceRandom2 = Math.floor(Math.random() * 6) + 1;

        //2.display he result
        document.getElementById('dice-1').style.display = 'block'; //show img dice
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + diceRandom1 + '.png';
        document.getElementById('dice-1').src = 'dice-' + diceRandom2 + '.png';

        if (diceRandom1 !== 1 && diceRandom2 !== 1) {
            //Add score
            roundScores += diceRandom1; // roundScore = roundScore + diceRandom;
            roundScores += diceRandom2;
            document.querySelector('#current-' + activePlayers).textContent = roundScores;
        } else {
            nextPlayer();
        }








        /* //2.display he result
        //1. random number
        var diceRandom = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block'; //show img dice
        diceDom.src = 'dice-' + diceRandom + '.png';
        //3.updoate the round score if the rolled number was not a 1
        if (diceRandom === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayers] = 0;
            document.getElementById('.score-' + activePlayers).textContent = '0';
            nextPlayer();

        } else if (diceRandom !== 1) {
            //Add score
            roundScores += diceRandom; // roundScore = roundScore + diceRandom;
            document.querySelector('#current-' + activePlayers).textContent = roundScores;
        } else {
            nextPlayer();
        }

        lastDice = diceRandom;
*/
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlayer) {
        //add current scaor to global score
        scores[activePlayers] += roundScores;

        //and update it to UI
        document.querySelector('#score-' + activePlayers).textContent = scores[activePlayers];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        //undefined,0,null or "" are COERCED to false
        //anything else is COCERED to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }


        //check the player won the game
        if (scores[activePlayers] >= winningScore) {
            document.querySelector('#name-' + activePlayers).textContent = 'WINNER!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayers + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayers + '-panel').classList.remove('active');
            gamePlayer = false;
            holdPlayer = false;
        } else {
            //next player
            nextPlayer();
        }
    }

});



document.querySelector('.btn-new').addEventListener('click', init);









function init() {
    scores = [0, 0]
    roundScores = 0;
    activePlayers = 0;
    gamePlayer = true;

    //Ex Use QuerySElector change the CSS
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none'; //not show img dice

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player1';
    document.getElementById('name-1').textContent = 'player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};

function nextPlayer() {
    // set next player 0 swith player 1
    activePlayers === 1 ? activePlayers = 0 : activePlayers = 1;
    roundScores = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //just remove and add active but we want to swith then have to use 'toggle'
    // document.querySelector('.player-0-panel').classList.remove('active');
    //  document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
};
