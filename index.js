var button = document.querySelector('button')
var getPlayer1 = document.querySelector('.img1');
var getPlayer2 = document.querySelector('.img2');

button.addEventListener('click', function() {

    var player1Dice = Math.floor(Math.random() * 6) + 1;
    var player2Dice = Math.floor(Math.random() * 6) + 1;

    getPlayer1.setAttribute('src', `d${player1Dice}.png`);
    getPlayer2.setAttribute('src', `d${player2Dice}.png`);


    if (player1Dice > player2Dice) {
        var titleResults = document.querySelector('h1');
        titleResults.innerText = `DICE# ${player1Dice} WINS TO PLAYER 1!`

        var player1 = document.querySelector('.p1').innerHTML = `<strike>You win!</strike>`
        var player2 = document.querySelector('.p2').innerText = `You lose!`

    } else if (player2Dice > player1Dice) {
        var titleResults = document.querySelector('h1');
        titleResults.innerText = `DICE# ${player2Dice} WINS TO PLAYER 2!`

        var player1 = document.querySelector('.p1').innerText = `You lose!`
        var player2 = document.querySelector('.p2').innerHTML = `<strike>You win!</strike>`

    } else if (player1Dice == player2Dice) {
        var titleResults = document.querySelector('h1');
        titleResults.innerText = `DICE# ${player1Dice} DRAW!`

        var player1 = document.querySelector('.p1').innerHTML = `<strike>Draw!</strike>`
        var player2 = document.querySelector('.p2').innerHTML = `<strike>Draw!</strike>`
    }


})