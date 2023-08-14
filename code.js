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

//token pick
const tokenpick = (() => {
    let token = ''
     const get = () => {
        return token;
     }
     const set = (newtoken) => {
        token = newtoken;
        return token;
     }
    return {get, set};
})();    
const xpick = document.getElementById('x');
xpick.addEventListener('click', function(){
 tokenpick.set('x');
 console.log('x here'); 
});
const opick = document.getElementById('o');
opick.addEventListener('click', function(){
 tokenpick.set('o');
 console.log('o here'); 
});




const player = (name) =>{
  
  return {name};
};

   const myturn = (() => {
    let play = '';
    if(tokenpick.get() == 'x' || tokenpick.get() == ''){
       play = 'player';
    }
    
     const get = () => {
        return play;
     }
     const set = (newplay) => {
        play = newplay;
        return play;
     }
    return {get, set};
})();    

const displayController = (() => {
    const start = () => {
        let token = 'x';
        let enemytoken = 'o';
        if(tokenpick.get() != ''){
         token = tokenpick.get();
        }
        
        if(token == 'o'){
            enemytoken = 'x';
        }
        const name = prompt("Please enter your name", "Harry");
        const board = gameboard.create;
        const stateOfBoard = gameboard.update('startGame', '');
        const human = player(name);
        const enemy = player('Rival')
        console.log('hello ' + name)
        
       
        const cellsArray = document.getElementsByClassName('cell');
        for(let i =0; i < cellsArray.length; i++){
            let position = cellsArray[i].getAttribute('id')
            cellsArray[i].textContent = '';
            cellsArray[i].addEventListener('click', function(){
                if(myturn.get() == 'player'){
              gameboard.update(position, token);
              cellsArray[i].textContent = token;
                 myturn.set('enemy');
                }
                else if(myturn.get() == 'enemy')
                gameboard.update(position, enemytoken);
              cellsArray[i].textContent = enemytoken;
              myturn.set('player');
            });
        }
        return {board , stateOfBoard, human, token, enemytoken, myturn};
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

//i can't change the tokens...