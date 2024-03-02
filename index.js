let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newgamebutton=document.querySelector("#new");
let messagecontainer=document.querySelector(".message");
let mess=document.querySelector("#mess");


let turn0=true;

const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0===true){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showwinner=(winner)=>{
    mess.innerText=`Congratulation ,Winner is ${winner}`
    messagecontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner=()=>{
    for(pattern of winpatter)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos1val!="" && pos1val!=""){
            if(pos1val===pos2val && pos2val===pos3val)
            {
                showwinner(pos1val);

            }
        }
    }
};


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame =()=>{
    turn0=true;
    enableboxes();
    messagecontainer.classList.add("hide");
   
};

newgamebutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
