/*
GAME rules:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayers, gamePlayer; //dice; 
init();

//dice = Math.floor(Math.random() * 6) + 1; // Math.floor take out decimal of math.random /math.random * 6 mean=0,1,2,3,4,5 so we need to + 1 to have 0,1,2,3,4,5,6

//** querySelector this called setter because set the valuse
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';


//** Ex.another way use querySelector called getter the values not setter the values.
var x = document.querySelector('#score-0').textContent; // or .inerHtml;
console.log(x);


//change values to be 0
init();


//Event and even handing rolling the dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlayer) {
        //1. random number
        var diceRandom = Math.floor(Math.random() * 6) + 1;


        //2.display he result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block'; //show img dice
        diceDom.src = 'dice-' + diceRandom + '.png';

        //3.updoate the round score if the rolled number was not a 1
        if (diceRandom !== 1) {
            //Add score
            roundScores += diceRandom; // roundScore = roundScore + diceRandom;
            document.querySelector('#current-' + activePlayers).textContent = roundScores;
        } else {
            nextPlayer();
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlayer) {
        //add current scaor to global score
        scores[activePlayers] += roundScores;

        //and update it to UI
        document.querySelector('#score-' + activePlayers).textContent = scores[activePlayers];
        //check the player won the game
        if (scores[activePlayers] >= 100) {
            document.querySelector('#name-' + activePlayers).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none'; //not show img dice

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

    document.querySelector('.dice').style.display = 'none';
};
