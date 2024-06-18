let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

//      0    1   2
//      3    4   5
//      6    7   8

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let count = 0;
let win = 0;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO)
            {
                box.innerText = "O";
                turnO = false;
                box.style.color = 'black';
            }
            else{
                box.innerText = "X";
                turnO = true;
                box.style.color = 'red';
            }

        count++;
        box.disabled = true;
        checkWinner();
    });
});

const resetGame = () =>{

    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
    win = 0;

};

const enableBoxes = () =>{

    for(box of boxes){

        box.disabled = false;
        box.innerText = "";
    }
};
const disableBoxes = () =>{

    for(let box of boxes){

        box.disabled = true;
    }
};


const showWinner = (winner) =>{
    if(winner==="X"){
        winner = "Player X";
    }
    else{
        winner = "Player O";
    }
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    win++;
    
};

const checkWinner = () =>{

    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val!=="" && pos2Val!=="" && pos3Val!==""){

            if(pos1Val===pos2Val && pos2Val===pos3Val){
            
                disableBoxes();
                showWinner(pos1Val);
            }
        }
        
        
    }

    if(count === 9 && win === 0){
        msg.innerText = "Game Draw";
        msgContainer.classList.remove("hide");
        count = 0;
        win = 0;
    }
};

resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);