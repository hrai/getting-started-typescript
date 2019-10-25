function startGame() {
  // starting a new game

  const playerName: string = 'Avril';
  logPlayer(playerName);

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name:string) {
  console.log(`New game starting for : ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
