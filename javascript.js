let turns = prompt("How many turns?");
console.log(`playing ${turns} turns`);
let playerChoice;
let compScr = 0;
let plyScr = 0;

for(let i=0;i<turns;i++)
{

    playerChoice = prompt("Rock, Paper or Scissors").toLowerCase();
    console.log("Player picked: " + playerChoice);
    let result = playGame(playerChoice);

    switch(result)
    {
        case 1:
            plyScr++;
            console.log("player won");
            break;
        case -1:
            compScr++;
            console.log("computer won")
            break;
        default:
            console.log("tie or invalid");
    }
}

if(plyScr>compScr)
{
    alert(`You Won! ${plyScr} to ${compScr}`);
    console.log(`player won by ${plyScr-compScr} points`);
} else if(plyScr<compScr)
{
    alert(`You lost! ${compScr} to ${plyScr}`);
    console.log(`computer won by ${compScr-plyScr} points`);
} else 
{
    alert(`Tie! ${plyScr} to both sides`);
    console.log(`Tie! ${plyScr} to both sides`)
}

function choose()
{
    return Math.floor(Math.random()*3)
}

function playGame(ch1)
{
    let computerChoice = choose();
    let ch2 = `${(computerChoice==0)?"scissors":(computerChoice==1)?"paper":"rock"}`;
    console.log("Computer picked: " + ch2);

    switch(ch1)
    {
        case "rock":
            switch(ch2)
            {
                case "rock":
                    alert("Tie!");
                    return 0;
                case "paper":
                    alert("Paper beats rock, you loose!");
                    return -1;
                case "scissors":
                    alert("Rock beats scissors, you win!");
                    return 1;
            }
            break;
        
        case "paper":
            switch(ch2)
            {
                case "rock":
                    alert("Paper beats rock, you win!");
                    return 1;
                case "paper":
                    alert("Tie");
                    return 0;
                case "scissors":
                    alert("Scissors beat paper you loose!");
                    return -1;
            }
            break;
        
        case "scissors":
            switch(ch2)
            {
                case "rock":
                    alert("Rock beats scissors, you loose!");
                    return -1;
                case "paper":
                    alert("Scissors beat paper, you win!");
                    return 1;
                case "scissors":
                    alert("Tie!");
                    return 0;
            }
            break;
        
        default:
            alert("Invalid entry");
            return 0;
    }
}