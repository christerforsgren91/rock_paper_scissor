const computerPick = () => {
  let wepon
  let pick = [Math.floor(Math.random() * 3)]
  if (pick === 0) {
    wepon = 'ROCK'
  }else if (pick === 1) {
    wepon = 'PAPER'
  }else if (pick === 2) {
    wepon = 'SCISSOR'
  }
  return wepon
}

const whoWins = (player) => {
  let computer = computerPick()
  let winner
  if (player === 'ROCK' && computer === 'SCISSOR') {
    winner = 'player'
  }else if (player === 'ROCK' && computer === 'PAPER') {
    winner = 'computer'
  }else if (player === 'PAPER' && computer === 'SCISSOR') {
    winner = 'computer'
  }else if (player === 'PAPER' && computer === 'ROCK') {
    winner = 'player'
  }else if (player === 'SCISSOR' && computer === 'PAPER') {
    winner = 'player'
  }else if (player === 'SCISSOR' && computer === 'ROCK') {
    winner = 'computer'
  }else if (player === computer) {
    winner = 'tie'
  }
  return (winner, computer)
}

export {winner, computer}




/*['rock', 'paper', 'scissors']
theGame[Math.floor(Math.random() * 3)]*/