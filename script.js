function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random()*3);
    return arr[choice];
}

function playround(pchoice, cchoice){
    if (pchoice.toLowerCase() === cchoice.toLowerCase()) {
        return "tie";
    } else if (pchoice.toLowerCase() === "scissors") {
        if (cchoice.toLowerCase() === "rock") {
            return "computer wins";
        } else {
            return "player wins";
        }
    } else if (pchoice.toLowerCase() === "rock") {
        if (cchoice.toLowerCase() === "scissors") {
            return "player wins";
        } else {
            return "computer wins";
        }
    } else {
        if (cchoice.toLowerCase() === "scissors"){
            return "computer wins";
        } else {
            return "player wins";
        }
    }
}



function clicked(choice){
    const playerchoice = choice;
    const compchoice = getComputerChoice();

    const result = playround(playerchoice, compchoice);

    if (created === ""){

        showchosen.appendChild(showplayer);
        showchosen.appendChild(showcomp);
        showchosen.appendChild(showplayerscore);
        showchosen.appendChild(showcompscore);
        showchosen.appendChild(showresult);

        container.append(showchosen);

        created = "created";

    }

    if (result === "player wins"){
        playerscore += 1;
    } else if (result === "computer wins"){
        compscore += 1;
    }

    showplayer.textContent = "Player has chosen: " + playerchoice;
    showcomp.textContent = "Computer has chosen: " + compchoice;
    showplayerscore.textContent = "Player Score: " + playerscore;
    showcompscore.textContent = "Computer Score: " + compscore;

    if (playerscore === 5) {
        showresult.textContent = "Player wins overall game!";
        playerscore = 0;
        compscore = 0;
    } else if (compscore === 5){
        showresult.textContent = "Computer wins overall game!";
        compscore = 0;
        playerscore = 0;
    } else {
        showresult.textContent = result;
    }


}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const container = document.querySelector('#message');

const showchosen = document.createElement('div');
const showplayer = document.createElement('p');
const showcomp = document.createElement('p');
const showplayerscore = document.createElement('p');
const showcompscore = document.createElement('p');
const showresult = document.createElement('h3');

let created = "";
let playerscore = 0;
let compscore = 0;

rock.addEventListener('click', () => clicked("rock"));
paper.addEventListener('click', () => clicked("paper"));
scissors.addEventListener('click', () => clicked("scissors"));
