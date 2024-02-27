function getComputerChoice() {
  let escolhas = ["pedra", "papel", "tesoura"];
  const randomIndex = Math.floor(Math.random() * escolhas.length);
  return escolhas [randomIndex];
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
      (playerSelection === "pedra" && computerSelection === "tesoura") ||
      (playerSelection === "papel" && computerSelection === "pedra") ||
      (playerSelection === "tesoura" && computerSelection === "papel")
  ) { 
      return "win";
  } else if (
      (playerSelection === "tesoura" && computerSelection === "pedra") ||
      (playerSelection === "pedra" && computerSelection === "papel") ||
      (playerSelection === "papel" && computerSelection === "tesoura")
  ) {
      return "lose";
  } else if (playerSelection === computerSelection){
      return "tie";
  } else {
      return "invalid";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++){
      let playerSelection = prompt("Digite sua escolha (pedra, papel ou tesoura):");
      while (!["pedra", "papel", "tesoura"].includes(playerSelection.toLowerCase())){
          playerSelection = prompt("Escolha errada! Por favor entre com pedra, papel ou tesoura:");
      }
      let computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);

      if (result === "win") {
          playerScore++;
          console.log("You win!")
      } else if (result === "lose") {
          computerScore++;
          console.log("You lose!")
      } else if (result === "tie") {
          console.log("É um empate!");
      } else {
          console.log("Seleção Inválida!")
      }
  }

  if (playerScore > computerScore) {
      console.log("Você ganhou o jogo!");
  } else if (playerScore < computerScore) {
      console.log("Você perdeu o jogo!");
  } else {
      console.log("Este é um jogo empatado!")
  }
}

playGame();
