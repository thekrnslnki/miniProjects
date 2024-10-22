let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#userScore");
const comp = document.querySelector("#compScore");
const msg = document.querySelector("#msg");

const getCompChoice = () => {
    const options = ["rock" , "paper" , "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
}

const drawGame =()=>{
    console.log("The game was Draw ");
    msg.innerText = "Draw 🥱"
    msg.style.backgroundColor = "grey"
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win !!");
        userScore ++ ; 
        user.innerText = userScore ;
        msg.innerText = "You Win 🥳!"
        msg.style.backgroundColor = "green"
    }else {
        console.log("You Lose ")
        compScore++ ;
        comp.innerText = compScore;
        msg.innerText = "You Lose😔 !"
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) =>{
    console.log (`${userChoice} was the user's choice`);
    // Generate computer choice 
    const compChoice = getCompChoice ();
    console.log(`${compChoice} was a computer's choice`);

    if(userChoice === compChoice){
        //draw Game
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissors , paper 
            userWin = compChoice === "paper"? false : true ;
        }else if(userChoice === "paper"){

            // rock , scissors 
            userWin = compChoice === "scissors" ? false:true ;
        }else {
            // rock , paper 
            userWin = compChoice === "rock" ? false : true ; 
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    //console.log("choice");
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
       console.log(`${userChoice} was clicked`) ;
        playGame(userChoice);
    })
})