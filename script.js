let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("#div");

const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');

pedra.addEventListener('click', () => {
    playGame('pedra');
});

papel.addEventListener('click', () => {
    playGame('papel');
});

tesoura.addEventListener('click', () => {
    playGame('tesoura');
});

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const pEmpate = document.createElement('p');
        pEmpate.textContent = (`Empate! Ambos escolheram ${humanChoice}.`);
        div.appendChild(pEmpate);
    } else if (
        (humanChoice === "pedra" && computerChoice === "tesoura") ||
        (humanChoice === "papel" && computerChoice === "pedra") ||
        (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
        const div = document.querySelector('#div');
        const pVoceVenceu = document.createElement('p');
        pVoceVenceu.textContent = (`Você venceu! ${humanChoice} vence ${computerChoice}`);
        div.appendChild(pVoceVenceu);
        return "humano";
    } else {
        const pVocePerdeu = document.createElement('p');
        pVocePerdeu.textContent = (`Você perdeu! ${computerChoice} vence ${humanChoice}`)
        div.appendChild(pVocePerdeu);
        return "computador";
    }
}

function playGame(escolha) {
    div.innerHTML = '';
    const computerChoice = getComputerChoice();

    const resultado = playRound(escolha, computerChoice);

    if (resultado === "humano") humanScore++;
    else if (resultado === "computador") computerScore++;
    
    const pPlacar = document.createElement('p');
    pPlacar.textContent = (`Placar atual - Você: ${humanScore}, Computador: ${computerScore}`);
    div.appendChild(pPlacar);

    if (humanScore >= 5 || computerScore >= 5) {

        if (humanScore > computerScore) {
            div.innerHTML = '';
            const pVenceu = document.createElement('p');
            pVenceu.textContent = (`Parabéns! Você venceu a melhor de 5 com placar ${humanScore} x ${computerScore}!`);
            div.appendChild(pVenceu);
        } else if (computerScore > humanScore) {
            div.innerHTML = '';
            const pPerdeu = document.createElement('p');
            pPerdeu.textContent = (`Você perdeu! O computador venceu com placar ${computerScore} x ${humanScore}.`);
            div.appendChild(pPerdeu);
        } else {
            div.innerHTML = '';
            const pEmpate = document.createElement('p');
            pEmpate.textContent = (`Empate no placar final: ${humanScore} x ${computerScore}.`);
            div.appendChild(pEmpate);
        }
        resultadoFinal();
    };
}

function resultadoFinal() {
    pedra.disabled = papel.disabled = tesoura.disabled = true;

    const pEncerrado = document.createElement('p');
    pEncerrado.textContent = ("\nJogo encerrado!");
    div.appendChild(pEncerrado);

    const botaoJogar = document.createElement('button');
    botaoJogar.textContent = 'Jogar Novamente';
    document.body.appendChild(botaoJogar);
    
    botaoJogar.disabled = false;
    botaoJogar.addEventListener('click', () => {
        humanScore = computerScore = 0;
        choice = null;
        div.innerHTML = '';

        pedra.disabled = papel.disabled = tesoura.disabled = false;

        botaoJogar.remove();
    });
}