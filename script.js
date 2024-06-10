let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>{
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was click");
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const dissabledboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showwinner = (winner) =>{
    msg.innerHTML = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    dissabledboxes();
}

const checkwinner = () => {
    for(pattern of winpattern){

        let firstval = boxes[pattern[0]].innerHTML;
        let secondval= boxes[pattern[1]].innerHTML;
        let thirdval = boxes[pattern[2]].innerHTML;

        if(firstval != "" && secondval != "" && thirdval != ""){
            if(firstval === secondval && secondval === thirdval){
                console.log("winner",firstval);

                showwinner(firstval);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
