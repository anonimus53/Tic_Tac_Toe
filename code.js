//Gameboard object, as a module.

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
            return state;
        }
     case 'two':
        if(state[0][1] == 0){
            state[0][1] = token;
            return state;
           
        }else{
            return state;
        }
     case 'three':
        if(state[0][2] == 0){
            state[0][2] = token;
            return state;
           
        }else{
            return state;
        }
     case 'four':
        if(state[1][0] == 0){
            state[1][0] = token;
            return state;
           
        }else{
            return state;
        }
     case 'five':
        if(state[1][1] == 0){
            state[1][1] = token;
            return state;
           
        }else{
            return state;
        }
     case 'six':
        if(state[1][2] == 0){
            state[1][2] = token;
            return state;
           
        }else{
            return state;
        }
     case 'seven':
        if(state[2][0] == 0){
            state[2][0] = token;
            return state;
           
        }else{
            return state;
        }
     case 'eight':
        if(state[2][1] == 0){
            state[2][1] = token;
            return state;
           
        }else{
            return state;
        }
     case 'nine':
        if(state[2][2] == 0){
            state[2][2] = token;
            return state;
           
        }else{
            return state;
        }
     default:
        console.log("Position doesn't exist!");
    }
  };
 return {create, update};
})();

//const test = gameboard.update('eight', 'x');
//console.log(test); works fine

//Player object, as a factory function.
const player = (name, token) =>{
  //creates a player with a name and a token
  return {name, token};
};

//const human = player('george', 'x');
//console.log(human.token); we get 'x' works fine

//DisplayController object, as module
const displayController = (() => {
  
    //will use gameboard.update or gameboard.create in here

})();

//We need to create players, manage their turns and,
//update the board depending on the context.
//Also win, lose and restart the game.

//Maybe make and A.I to play against
//with difficulties