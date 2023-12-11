function getComputerChoice(){
    const arr = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random()*3);
    return arr[choice];
}

function game(player, comp){
    function playround(pchoice, cchoice){
        if (pchoice.toLowerCase() === cchoice.toLowerCase()) {
            return "tie";
        } else if (pchoice.toLowerCase() === "scissors") {
            if (cchoice.toLowerCase() === "rock") {
                comp += 1;
                return "computer wins";
            } else {
                player += 1;
                return "player wins";
            }
        } else if (pchoice.toLowerCase() === "rock") {
            if (cchoice.toLowerCase() === "scissors") {
                player += 1;
                return "player wins";
            } else {
                comp += 1;
                return "computer wins";
            }
        } else {
            if (cchoice.toLowerCase() === "scissors"){
                comp += 1;
                return "computer wins";
            } else {
                player += 1;
                return "player wins";
            }
        }
    }

    for (let i = 0; i < 5; i = i + 1){
        const playerchoice = prompt("Your choice: ");
        const compchoice = getComputerChoice();
        console.log(playerchoice);
        console.log(compchoice);
        console.log(playround(playerchoice, compchoice));
        console.log("player");
        console.log(player);
        console.log("computer");
        console.log(comp);
    }

    if (player > comp){
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}

player = 0;
comp = 0;
game(player, comp);