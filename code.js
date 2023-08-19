const gameboard = (() => {  
  //creates empty board.
  const create = [[0,0,0],[0,0,0],[0,0,0]];

  //current state of board that can be updated only from inside
  const state = [[0,0,0],[0,0,0],[0,0,0]];
  
  
  // position = 'one'to'nine' lowercase always
  // token = 'x'or'o' lowercase always

  //updates the state of the board.
  const update = (position, token) => {
   switch(position){
     case 'one':
        if(state[0][0] == 0){
            state[0][0] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'two':
        if(state[0][1] == 0){
            state[0][1] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'three':
        if(state[0][2] == 0){
            state[0][2] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'four':
        if(state[1][0] == 0){
            state[1][0] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'five':
        if(state[1][1] == 0){
            state[1][1] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'six':
        if(state[1][2] == 0){
            state[1][2] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'seven':
        if(state[2][0] == 0){
            state[2][0] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'eight':
        if(state[2][1] == 0){
            state[2][1] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
     case 'nine':
        if(state[2][2] == 0){
            state[2][2] = token;
            return state;
           
        }else{
            console.log('already taken!')
            return state;
        }
        case 'restart':
            for(let i = 0; i < state.length; i++){
                for(let j = 0; j < state[i].length; j++){
                state[i][j] = 0;
             }
            }
            return state;
     default:
        return state;
    }
  };
 return {create, update, state};
})();

const checkWinner = (()=>{
    let arr = gameboard.state;
    let count = 0;
    let winner = '';

    //win message
    const winMessage = () => {
       if((winner == 'x' && playerToken == 'x')||(winner == 'o' && playerToken == 'o')){
          const message = document.getElementById('winmessage')
          const playerOne = document.getElementById('playerone')
          let winnername = playerOne.textContent;
          message.textContent =  winnername+ ' Wins!'
          message.style.display = 'block';
          
       }
       if((winner == 'x' && playerToken == 'o')||(winner == 'o' && playerToken == 'x')){
        const message = document.getElementById('winmessage')
          const playerTwo = document.getElementById('playertwo')
          let winnername = playerTwo.textContent;
          message.textContent =  winnername+ ' Wins!'
          message.style.display = 'block';
          
       }
       if(winner == 'none'){
        const message = document.getElementById('winmessage')
          message.textContent = "It's a Tie!"
          message.style.display = 'block';
          
       }
    }

    const now = ()=>{
        //x wins
        if(arr[0][0] == 'x' && arr[1][0] == 'x' && arr[2][0] == 'x'){
            console.log('x wins go column1')
            winner = 'x';
            winMessage();
        }
         if(arr[0][1] == 'x' && arr[1][1] == 'x' && arr[2][1] == 'x'){
            console.log('x wins go column2')
            winner = 'x';
            winMessage();
        }
         if(arr[0][2] == 'x' && arr[1][2] == 'x' && arr[2][2] == 'x'){
            console.log('x wins go columns3')
            winner = 'x';
            winMessage();
        }
        if(arr[0][0] == 'x' && arr[0][1] == 'x' && arr[0][2] == 'x'){
            console.log('x wins go row1')
            winner = 'x';
            winMessage();
        }
        if(arr[1][0] == 'x' && arr[1][1] == 'x' && arr[1][2] == 'x'){
            console.log('x wins go row2')
            winner = 'x';
            winMessage();
        }
        if(arr[2][0] == 'x' && arr[2][1] == 'x' && arr[2][2] == 'x'){
            console.log('x wins go row3')
            winner = 'x';
            winMessage();
        }
        if(arr[0][0] == 'x' && arr[1][1] == 'x' && arr[2][2] == 'x'){
            console.log('x wins go cross1')
            winner = 'x';
            winMessage();
        }
        if(arr[0][2] == 'x' && arr[1][1] == 'x' && arr[2][0] == 'x'){
            console.log('x wins go cross2')
            winner = 'x';
            winMessage();
        }
        //o wins
        if(arr[0][0] == 'o' && arr[1][0] == 'o' && arr[2][0] == 'o'){
            console.log('o wins go column1')
            winner = 'o';
            winMessage();
        }
         if(arr[0][1] == 'o' && arr[1][1] == 'o' && arr[2][1] == 'o'){
            console.log('o wins go column2')
            winner = 'o';
            winMessage();
        }
         if(arr[0][2] == 'o' && arr[1][2] == 'o' && arr[2][2] == 'o'){
            console.log('o wins go columns3')
            winner = 'o';
            winMessage();
        }
        if(arr[0][0] == 'o' && arr[0][1] == 'o' && arr[0][2] == 'o'){
            console.log('o wins go row1')
            winner = 'o';
            winMessage();
        }
        if(arr[1][0] == 'o' && arr[1][1] == 'o' && arr[1][2] == 'o'){
            console.log('o wins go row2')
            winner = 'o';
            winMessage();
        }
        if(arr[2][0] == 'o' && arr[2][1] == 'o' && arr[2][2] == 'o'){
            console.log('o wins go row3')
            winner = 'o';
            winMessage();
        }
        if(arr[0][0] == 'o' && arr[1][1] == 'o' && arr[2][2] == 'o'){
            console.log('o wins go cross1')
            winner = 'o';
            winMessage();
        }
        if(arr[0][2] == 'o' && arr[1][1] == 'o' && arr[2][0] == 'o'){
            console.log('o wins go cross2')
            winner = 'o';
            winMessage();
        }
        //tie
        if(count == 9 && winner == ''){
            console.log("It's a Tie!")
            winner = 'none';
            winMessage();
        }
    };
    const move = () => {
        count++;
    };
    return {now, move,};
})();

let playerToken = ''
let enemyToken = ''
let token = '';

const xpick = document.getElementById('x');
xpick.addEventListener('click', function(){
 playerToken = 'x';
 enemyToken = 'o';
 xpick.style.backgroundColor = "red";
 opick.style.backgroundColor = "white";
});
const opick = document.getElementById('o');
opick.addEventListener('click', function(){
 playerToken = 'o';
 enemyToken = 'x';
 opick.style.backgroundColor = "red";
 xpick.style.backgroundColor = "white";
});

//we click x
xpick.click();
//player factory function
const player = (name, token) =>{
  return {name, token};
};

//swap player play turn
 const swapPlayer = (token) => {
  if(token == playerToken){
    token = enemyToken;
  }
  else{
    token = playerToken;
  }
  return token;
 };

const displayController = (() => {
    const start = () => {
        
        const name = prompt("Player One enter your name", "David");
        const enemyname = prompt("Player Two enter your name", "Goliath");
        const board = gameboard.create;
        const stateOfBoard = gameboard.update('startGame', '');
        const human = player(name, playerToken);
        const enemy = player(enemyname, enemyToken);
        console.log('hello ' + name)
        console.log('your oponent is :' + enemy.name);
        //display name player One
        const callplayer = document.createElement('h3');
    const playerOne = document.getElementById('playerone')
    callplayer.textContent =  human.name;
    playerOne.textContent = '';
    playerOne.appendChild(callplayer);
        //display name player Two
        const callenemy = document.createElement('h3');
        const playerTwo = document.getElementById('playertwo')
        callenemy.textContent = enemy.name;
        playerTwo.textContent = '';
        playerTwo.appendChild(callenemy);
        //display board
        const cellsArray = document.getElementsByClassName('cell');
        for(let i =0; i < cellsArray.length; i++){
            let position = cellsArray[i].getAttribute('id')
            
            cellsArray[i].addEventListener('click', function(){
              if(cellsArray[i].textContent == ''){
              gameboard.update(position, token);
              cellsArray[i].textContent = token;
              token = swapPlayer(token);
              checkWinner.now();
              checkWinner.move();
              
              
              }
            });
        }
        return {board , stateOfBoard, name, enemyname};
    }
    

    return {start}
})();
//start button
const startButton = document.getElementById('start');
startButton.addEventListener('click', function(){
displayController.start();
startButton.disabled = true;
opick.disabled = true;
xpick.disabled = true;

});
//restart button
const restartButoon = document.getElementById('restart');
restartButoon.addEventListener('click', function(){
    location.reload();
});


//make the game stop when someone wins
