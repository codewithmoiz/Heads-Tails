var currentPlayer = 'player1';
var player1Button = document.getElementById('flipPlayer1');
var player2Button = document.getElementById('flipPlayer2');
var player1Points = 0;
var player2Points = 0;

function playerName(){
    var player1 = prompt('Player 1 name: ', "Player1");
    var player2 = prompt('Player 2 name: ', "Player2");
    document.getElementById('name1').innerText = player1;
    document.getElementById('name2').innerText = player2;
}
playerName();

function flipCoin(player) {
    if (player !== currentPlayer) return;

    var coin = document.getElementById('coin');
    var choice = prompt("Choose heads or tails:", "heads, tails").toUpperCase();
    var coinText = coin.innerText.toUpperCase();
    var result;

    var resultsArray = ['HEADS', 'TAILS', 'HEADS', 'TAILS'];

    var randomIndex = Math.floor(Math.random() * resultsArray.length);
    
result = resultsArray[randomIndex];

coin.innerText = result;

gsap.to(coin, {
    rotationY: '+=720',
    scale: 2,
    duration: 2, 
    ease: 'power3.easeInOut',
    onComplete: function() {
        gsap.set(coin, {
            rotationY: 0,
            scale: 1,
        });

        if (choice === result) {
            if (player === 'player1') {
                player1Points++;
                document.getElementById('number1').innerText = player1Points;
            } else {
                player2Points++;
                document.getElementById('number2').innerText = player2Points;
            }
            alert("You've won!");
        } else {
            if (player === 'player1') {
                player1Points--;
                document.getElementById('number1').innerText = player1Points;
            } else {
                player2Points--;
                document.getElementById('number2').innerText = player2Points;
            }
            alert("You've lost!");
        }
        

        if (player === 'player1') {
            currentPlayer = 'player2';
            player1Button.disabled = true;
            player1Button.style.backgroundColor = 'grey';
            player1Button.style.color = '#fff';
            player2Button.style.backgroundColor = '';
            player2Button.style.color = '';
            player2Button.disabled = false;
        } else {
            currentPlayer = 'player1';
            player1Button.disabled = false;
            player2Button.disabled = true;
            player2Button.style.backgroundColor = 'grey';
            player2Button.style.color = '#fff';
            player1Button.style.backgroundColor = '';
            player1Button.style.color = '';
        }
    }
});
};