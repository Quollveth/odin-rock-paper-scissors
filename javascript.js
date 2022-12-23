let playerChoice;
let compScr = 0;
let plyScr = 0;
let round = 1;

const selectionBtns = document.querySelectorAll('.select');
const resultField = document.getElementById('result');
const tableHolder = document.getElementById('table-holder');
const scoreboard = document.getElementById('scoreboard');
const score = document.getElementById('scoreboard-title');

resultField.value = '';

selectionBtns.forEach(element =>{
    element.addEventListener('click',()=>{
        playGame(element.id);
    })
})


function playGame(ch1){
    playerChoice = ch1;
    let result = checkResult(playerChoice);

    switch(result)
    {
        case 1:
            resultField.value = 'You Won';
            resultField.classList.remove("victory","tie","defeat");
            resultField.classList.add("victory");
            break;
        case -1:
            resultField.value = 'You Lost';
            resultField.classList.remove("victory","tie","defeat");
            resultField.classList.add("defeat");
            break;
        default:
            resultField.value = 'Tie';
            resultField.classList.remove("victory","tie","defeat");
            resultField.classList.add("tie");
    }
    round++;
}

function checkResult(ch1)
{
    let result;
    let computerChoice = Math.floor(Math.random()*3);
    let ch2 = `${(computerChoice==0)?"scissors":(computerChoice==1)?"paper":"rock"}`;

    switch(ch1)
    {
        case "rock":
            switch(ch2)
            {
                case "rock":
                    //tie
                    result = 0;
                    break;
                case "paper":
                    //player looses
                    result = -1;
                    break;
                case "scissors":
                    //player wins
                    result = 1;
                    break;
            }
            break;
        
        case "paper":
            switch(ch2)
            {
                case "rock":
                    //player wins
                    result = 1;
                    break;
                case "paper":
                    //tie
                    result = 0;
                    break;
                case "scissors":
                    //player looses
                    result = -1;
                    break;
            }
            break;
        
        case "scissors":
            switch(ch2)
            {
                case "rock":
                    //player looses
                    result = -1;
                    break;
                case "paper":
                    //player wins
                    result = 1;
                    break;
                case "scissors":
                    //tie
                    result = 0;
                    break;
            }
            break;
        
        default:
            //invalid entry, shouldn't happen
            result = 0;
            break;
    }
    updateScore(ch1,ch2,result);
    return result;
}

function updateScore(ch1,ch2,r){
    if(tableHolder.classList.contains("hidden")){
        tableHolder.classList.remove("hidden");
    }
    let row = scoreboard.insertRow(round);
    let cell = row.insertCell(-1);
    cell.innerHTML = round;
    cell = row.insertCell(-1);
    cell.innerHTML = ch1;
    cell = row.insertCell(-1);
    cell.innerHTML = ch2;
    cell = row.insertCell(-1);
    cell.innerHTML = (r==1?'player win':r==-1?'computer win':'Tie');
    
    if(r==1){
        plyScr++;
    } else if(r==-1){
        compScr++;
    }
    score.innerText = `Player: ${plyScr} --- Computer: ${compScr}`;
}