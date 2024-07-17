let  score=JSON.parse(localStorage.getItem('score'));


    if (score ===null){
       score ={
        Wins : 0,
        Lose : 0,
        Tie : 0
      };
    }


    updateScore();
    
let autoplaying = false;
let intervalId;
    function autoplay(){
      if(!autoplaying){
    intervalId=  setInterval(function(){
        const move1=game();
        playerGame(move1)
      },1000)
       autoplaying=true;
    }
    else{
      clearInterval(intervalId);
      autoplaying=false;
    }

  }


  document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
      playerGame('rock')
    }else if(event.key==='p'){
      playerGame('paper')
    }
    else if(event.key==='s'){
      playerGame('scissors')
    }
  });

    function playerGame(playerMove) {
      let result1 = '';

      const computerMove1 = game();
      if (playerMove === 'rock') {
        if (computerMove1 === 'rock') {
          result1 = 'Tie';
        } else if (computerMove1 === 'paper') {
          result1 = 'You lose';
        } else if (computerMove1 === 'scissors') {
          result1 = 'You win';
        }
      } else if (playerMove === 'paper') {
        if (computerMove1 === 'rock') {
          result1 = 'You win';
        } else if (computerMove1 === 'paper') {
          result1 = 'Tie';
        } else if (computerMove1 === 'scissors') {
          result1 = 'You lose';
        }
      } else if (playerMove === 'scissors') {
        if (computerMove1 === 'rock') {
          result1 = 'You lose';
        } else if (computerMove1 === 'paper') {
          result1 = 'You win';
        } else if (computerMove1 === 'scissors') {
          result1 = 'Tie';
        }
      }  
      
      if(result1==='You win'){
        score.Wins+=1;
      }else if(result1==='You lose'){
        score.Lose+=1;
      }else if(result1==='Tie'){
        score.Tie+=1;
      }
      
      localStorage.setItem('score', JSON.stringify(score));

    updateScore();
  
    document.querySelector('.js-result').innerHTML=result1;

    document.querySelector('.js-move').innerHTML=`you 
    <img src="${playerMove}-emoji.png"  class="move-icon">
  <img src="${computerMove1}-emoji.png" class="move-icon">
  computer`
     
    }

    

  

    function updateScore(){
      document.querySelector('.js-button').innerHTML=`Wins: ${score.Wins}  Lose: ${score.Lose}  Tie: ${score.Tie}`;

    }

    function game() {
      const randomNumber1 = Math.random();
      let computerMove1 = '';
      if (randomNumber1 >= 0 && randomNumber1 < 1 / 3) {
        computerMove1 = 'rock';
      } else if (randomNumber1 >= 1 / 3 && randomNumber1 < 2 / 3) {
        computerMove1 = 'paper';
      } else if (randomNumber1 >= 2 / 3 && randomNumber1 < 1) {
        computerMove1 = 'scissors';
      }
      return computerMove1;
    }
  