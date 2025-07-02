function getComputerChoice () {
    const randomNumber = Math.random();

    if (randomNumber < 0.3334) {
        return "pedra";
    } else if (randomNumber < 0.6667) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function getHumanChoice() {
    let choice = prompt("Pedra, papel ou tesoura: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Empate! Ambos escolheram ${humanChoice}.`);
    } else if (
        (humanChoice === "pedra" && computerChoice === "tesoura") ||
        (humanChoice === "papel" && computerChoice === "pedra") ||
        (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
        console.log(`Você venceu! ${humanChoice} vence ${computerChoice}`)
        return "humano";
    } else {
        console.log(`Você perdeu! ${computerChoice} vence ${humanChoice}`)
        return "computador";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`\nRodada ${i}:`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const resultado = playRound(humanChoice, computerChoice);

        if (resultado === "humano") {
            humanScore += 1;
        } else if (resultado === "computador") {
            computerScore += 1;
        }
        
        console.log(`Placar atual - Você: ${humanScore}, Computador: ${computerScore}`);
    }
    console.log("\nJogo encerrado!");
    if (humanScore > computerScore) {
        console.log(`Parabéns! Você venceu a melhor de 5 com placar ${humanScore} x ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`Você perdeu! O computador venceu com placar ${computerScore} x ${humanScore}.`);
    } else {
        console.log(`Empate no placar final: ${humanScore} x ${computerScore}.`);
    }
}

playGame();