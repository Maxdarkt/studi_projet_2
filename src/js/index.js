$(document).ready(() => {
  if(jQuery){
  console.log('jQuery is included to the page')
  //Initialize game
  newGame()
  } else {  
  console.log('jQuery is not included to the page')
  }
})
// PART 1 : class User
// 1.1 Creation of the User class
class User {
  constructor(active) {
    this.active = active,
    this.globalScore = 0,
    this.roundScore = 0
  }
  setGlobalScore(sum) { 
    this.globalScore += sum
    return this.globalScore
  }
  setRoundScore(sum) { 
    this.roundScore += sum
    return this.roundScore
  }    
}
// 1.2 Creation of the two players
const player1 = new User(true)
const player2 = new User(false)

// PART 2 : 3 Actions client
// 2.1 - Create a new Game : initialize player 1 & 2
let newGame = () => {
  player1.active = true
  player1.globalScore = 0
  player1.roundScore = 0
  player2.active = false
  player2.globalScore = 0
  player2.roundScore = 0
  initializeGame()
  hideAlert()
}
// 2.2 - Roll Dice (Play again)
let rollDice = () => {
  //Rolling the dice
  let random = Math.floor((Math.random() * 6) + 1)
  switch(random) {
    case 1 :
      numberOne()
      break;
    case 2 :
      numberTwo()
      break;
    case 3 :
      numberThree()
      break;
    case 4 :
      numberFour()
      break;
    case 5 :
      numberFive()
      break;
    case 6 :
      numberSixt()
      break;
  }
  if(random === 1){
    loseTheParty()
  } else {
    addRollDiceToCurrentScore(random)
  }
}
// 2.3 - Hold : Save current score
let hold = async () => {
  if(player1.active && player1.roundScore !== 0) {
    player1.setGlobalScore(player1.roundScore)
    player1.roundScore = 0
  } else if(player1.active && player1.roundScore === 0) {
    return
  } else if (player2.active && player2.roundScore !== 0) {
    player2.setGlobalScore(player2.roundScore)
    player2.roundScore = 0
  }
  else if (player2.active && player2.roundScore === 0) {
    return
  } else {
    return
  }
  displayGlobalScore()
  displayRoundScore()
  //Creation of a Promise to wait the answer from isthereAWinner()
  let isWinnerPromise = new Promise((resolve, reject) => {
    let  isWinner = isThereAWinner()
    if(isWinner) {
      resolve(isWinner)
    } else {
      reject(isWinner)
    }
  })
  isWinnerPromise
  .then(() => {
    //If there is a winner then we stop the game
    displayAlert()
    $('#container-play button').attr('disabled', 'disabled')
    $('#container-play button').addClass('text-gray-400 cursor-not-allowed')
  })
  //Otherwise we change players => changeStatus()
  .catch(() => changeStatus())
}
// PART 3 : operating && display functions
// 3.1 lose
let loseTheParty = () => {
  if(player1.active){
    player1.roundScore = 0
  } else {
    player2.roundScore = 0
  }
  displayRoundScore()
  changeStatus()
}
//3.2 Add Rolling the dice to currentScore (roundScore)
let addRollDiceToCurrentScore = (random) => {
  if(player1.active){
    player1.setRoundScore(random)
  } else {
    player2.setRoundScore(random)
  }
  displayRoundScore()
}
// 3.3 Display Global Score 
let displayGlobalScore = () => {
  if(player1.active){
    $('#global-score-1').text(player1.globalScore)
  } else {
    $('#global-score-2').text(player2.globalScore)
  } 
}
// 3.4 Display Round Score (current score)
let displayRoundScore = () => {
  if(player1.active){
    $('#round-score-1').text(player1.roundScore)
  } else {
    $('#round-score-2').text(player2.roundScore)
  } 
}
//PART 4 : general functions
// 4.1 initialize
let initializeGame = () => {
  $('#player-1').removeClass('opacity-0').addClass('opacity-1')
  $('#player-1').prev().removeClass('font-extralight')
  $('#player-2').removeClass('opacity-1').addClass('opacity-0')
  $('#global-score-1').text(player1.globalScore)
  $('#global-score-2').text(player2.globalScore)
  $('#round-score-1').text(player1.roundScore)
  $('#round-score-2').text(player2.roundScore)
  $('#random').text('?')
  $('#container-play button').removeClass('text-gray-400 cursor-not-allowed')
  $('#container-play button').prop('disabled', false)
  initializeDice()
}
// 4.2 Change the status of the player when he loses or saves his score (hold)
let changeStatus = () => {
  if(player1.active){
    player1.active = false
    player2.active = true
    $('#player-1').removeClass('opacity-1').addClass('opacity-0')
    $('#player-2').removeClass('opacity-0').addClass('opacity-1')
    $('#player-1').prev().addClass('font-extralight')
    $('#player-2').prev().removeClass('font-extralight')
  } else {
    player2.active = false
    player1.active = true
    $('#player-2').removeClass('opacity-1').addClass('opacity-0')
    $('#player-1').removeClass('opacity-0').addClass('opacity-1')
    $('#player-1').prev().removeClass('font-extralight')
    $('#player-2').prev().addClass('font-extralight')
  }
}
// 4.3 Check if the player has won
let isThereAWinner = () => {
  if(player1.active && player1.globalScore >= 100){
    let message = 'Le joueur 1 a gagné !!!'
    $('#response').text(message)
    return true
  } else if(player2.active && player2.globalScore >= 100) {
    let message = 'Le joueur 2 a gagné !!!'
    $('#response').text(message)
    return true
  }
  return false
}

//PART 5 : window alert
let displayAlert = () => {
  $('#alert').fadeIn(400)
}

let hideAlert = () => {
  $('#alert').fadeOut(400)
  if($('#alert .opacity-0')){
    setTimeout(function(){
      $('#alert').removeClass('opacity-0')
    },400)
  }
}