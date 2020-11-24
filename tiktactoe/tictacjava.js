let turn = 0;
let count = 1;
let sign = "X";

let turnX = 1;
let turnO = 1;

let xWins = 0;
let oWins = 0;


let chooseSpot = function(spot){
    
    document.getElementById(spot).classList.add(sign);
    console.log(spot);
    console.log(sign);
    checkWin();
    switchPlayer();
    if((turn == 1)&&(count == 5)){
        noOneWins();
    }
}

let switchPlayer = () => {
    if(turn == 0){
        sign = "O";
        turn++;
    }else{
        sign = "X";
        turn--;
        count++;
    }
    document.getElementById(`player`).textContent = sign;
    document.getElementById(`turn`).textContent = count;
    console.log(sign);
    console.log(count);
};

let checkWin = function(){
    let elemFullList = document.getElementsByClassName(sign);
    let L = 0;
    let M = 0;
    let R = 0;
    let top = 0;
    let middle = 0;
    let bottom = 0;
    let DL = 0;
    let DR = 0;
    for(let i = 0; i<elemFullList.length; i++){
        let elemList = elemFullList[i];
        if(elemList.classList.contains(`L`)){
            L++;
            if(elemList.classList.contains(`top`)){
                DL++;
                console.log(`hereeeee`)
            }else if(elemList.classList.contains(`bottom`)){
                DR++;
            };
        }else if(elemList.classList.contains(`M`)){
            M++;
            if(elemList.classList.contains(`middle`)){
                DL++;
                DR++;
            };
        }else if(elemList.classList.contains(`R`)){
            R++;
            if(elemList.classList.contains(`top`)){
                DR++;
            }else if(elemList.classList.contains(`bottom`)){
                DL++;
            };
        }else if(elemList.classList.contains(`top`)){
            top++;
        }else if(elemList.classList.contains(`middle`)){
            middle++;
        }else if(elemList.classList.contains(`bottom`)){
            bottom++;
        }
        console.log(`DL is ${DL}`);
        }
    if((L == 3)||(M == 3)||(R == 3)||(top == 3)||(middle == 3)||(bottom == 3)||(DL == 3)||(DR == 3)){
        win();
    };
};

let win = () => {
    document.getElementById("header").textContent = `${sign} WINNNS`;
    if(turn == 0){
        xWins++;
        document.getElementById("XWins").textContent = `X Wins: ${xWins}`;
    }else{
        oWins++;
        document.getElementById("YWins").textContent = `O Wins: ${oWins}`;
    }
};

let noOneWins = () => {
    document.getElementById(`message`).textContent = `No one wins`;
    document.getElementById(`message`).classList.add(`noOneWins`);
}