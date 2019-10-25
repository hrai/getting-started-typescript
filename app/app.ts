function startGame() {
  // starting a new game

  const playerName: string = 'Avril';
  logPlayer(playerName);
  unionTypes();
  typeAssertions();

  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name:string) {
  console.log(`New game starting for : ${name}`);
}

function unionTypes() {
  let str: string = 'test';
  let nullableStr: string | null = null;
  let undefinedString: string | undefined = undefined;

  console.log(str);
  console.log(nullableStr);
  console.log(undefinedString);
}

function typeAssertions() {
  let value: any = 5;
  let str:string=(value as number).toFixed(4);

  console.log(str);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
