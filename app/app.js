function startGame() {
    // starting a new game
    var playerName;
    playerName = 'Avril';
    logPlayer(playerName);
    unionTypes();
    typeAssertions();
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPlayer(name) {
    console.log("New game starting for : " + name);
}
function unionTypes() {
    var str = 'test';
    var nullableStr = null;
    var undefinedString = undefined;
    console.log(str);
    console.log(nullableStr);
    console.log(undefinedString);
}
function typeAssertions() {
    var value = 5;
    var str = value.toFixed(4);
    console.log(str);
}
document.getElementById('startGame').addEventListener('click', startGame);
var myResult = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};
var player = new Player();
player.name = 'Ben';
console.log(player.formatName);
