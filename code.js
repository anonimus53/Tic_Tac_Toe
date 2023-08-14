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
 return {create, update};
})();
let playerToken = ''
let enemyToken = ''
let token = '';

const xpick = document.getElementById('x');
xpick.addEventListener('click', function(){
 playerToken = 'x';
 enemyToken = 'o';

});
const opick = document.getElementById('o');
opick.addEventListener('click', function(){
 playerToken = 'o';
 enemyToken = 'x';
});

const player = (name, token) =>{
  return {name, token};
};


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
        
        const name = prompt("Please enter your name", "Harry");
        const board = gameboard.create;
        const stateOfBoard = gameboard.update('startGame', '');
        const human = player(name, playerToken);
        const enemy = player('Rival', enemyToken);
        console.log('hello ' + name)
        console.log('your oponent is :' + enemy.name);
        
        const cellsArray = document.getElementsByClassName('cell');
        for(let i =0; i < cellsArray.length; i++){
            let position = cellsArray[i].getAttribute('id')
            
            cellsArray[i].addEventListener('click', function(){
              if(cellsArray[i].textContent == ''){
              gameboard.update(position, token);
              cellsArray[i].textContent = token;
              token = swapPlayer(token);
              }
            });
        }
        return {board , stateOfBoard, human,};
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
if(playerToken == ''){
    playerToken = 'x';
    enemyToken = 'o';
}
});
//restart button
const restartButoon = document.getElementById('restart');
restartButoon.addEventListener('click', function(){
    location.reload();
});

//time to check for 3 in a row and tie