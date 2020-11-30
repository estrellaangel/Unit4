let turn = 0;
let count = 1;
let sign = "X";

let turnX = 1;
let turnO = 1;

let xWins = 0;
let oWins = 0;



document.getElementById("button").onclick = function () {
    reset();
}

let chooseSpot = function (spot) {
    if (document.getElementById(spot).classList.contains(`X`)) {
        return;
    }
    if (document.getElementById(spot).classList.contains(`O`)) {
        return;
    }
    document.getElementById(spot).classList.add(sign);
    checkWin();
    switchPlayer();
}

let switchPlayer = () => {
    if (turn == 0) {
        sign = "O";
        turn++;
    } else {
        sign = "X";
        turn--;
        count++;
    }
    document.getElementById(`player`).textContent = sign;
    document.getElementById(`turn`).textContent = count;
};

let checkWin = function () {
    let elemFullList = document.getElementsByClassName(sign);
    let L = 0;
    let M = 0;
    let R = 0;
    let top = 0;
    let middle = 0;
    let bottom = 0;
    let DL = 0;
    let DR = 0;
    for (let i = 0; i < elemFullList.length; i++) {
        let elemList = elemFullList[i];
        if (elemList.classList.contains(`L`)) {
            L++;
            if (elemList.classList.contains(`top`)) {
                DL++;
            } else if (elemList.classList.contains(`bottom`)) {
                DR++;
            };
        } else if (elemList.classList.contains(`M`)) {
            M++;
            if (elemList.classList.contains(`middle`)) {
                DL++;
                DR++;
            };
        } else if (elemList.classList.contains(`R`)) {
            R++;
            if (elemList.classList.contains(`top`)) {
                DR++;
            } else if (elemList.classList.contains(`bottom`)) {
                DL++;
            };
        } if (elemList.classList.contains(`top`)) {
            top++;
        } else if (elemList.classList.contains(`middle`)) {
            middle++;
        } else if (elemList.classList.contains(`bottom`)) {
            bottom++;
        }
    }
    let spots = [L, M, R, top, middle, bottom, DL, DR];
    for (let i = 0; i < spots.length; i++) {
        if (spots[i] == 3) {
                let spotList = document.getElementsByClassName(spots[i]);
                for (let j = 0; j < spotList.length; j++) {
                    spotList[i].classList.add(`winnerRowColor`)
                    console.log(spotList[i]);
                }
            }
    };
    if ((L == 3) || (M == 3) || (R == 3) || (top == 3) || (middle == 3) || (bottom == 3) || (DL == 3) || (DR == 3)) {
        win();
    } else if ((turn == 0) && (count == 5)) {
        noOneWins();
    };

};

let win = () => {
    if (turn == 0) {
        xWins++;
        document.getElementById("XWins").textContent = `X Wins: ${xWins}`;
    } else {
        oWins++;
        document.getElementById("OWins").textContent = `O Wins: ${oWins}`;
    }
    document.getElementById(`textmessage`).textContent = `${sign} WINS !`
    document.getElementById(`message`).classList.add(`win`);
    document.getElementById(`message`).classList.remove(`message`);
    document.getElementById("button").textContent = "Play Again";
};

let noOneWins = () => {
    document.getElementById(`textmessage`).textContent = "No one wins";
    document.getElementById(`message`).classList.add(`noOneWins`);
    document.getElementById("button").textContent = "Reset";
}

function reset() {
    turn = 0;
    count = 1;
    sign = "X";
    let positions = [`1a`, `1b`, `1c`, `2a`, `2b`, `2c`, `3a`, `3b`, `3c`]

    for (let item = 0; item < positions.length; item++) {
        document.getElementById(positions[item]).classList.remove(`X`);
        document.getElementById(positions[item]).classList.remove(`O`);
    }
    console.log(`something`)

    document.getElementById(`turn`).textContent = "1";
    document.getElementById(`player`).textContent = "X";
    document.getElementById("message").classList.remove("win");
    document.getElementById("message").classList.remove("noOneWins");
    document.getElementById("textmessage").classList.remove("noOneWins");
    document.getElementById("textmessage").classList.remove("win");
    document.getElementById(`message`).classList.add(`message`);

}