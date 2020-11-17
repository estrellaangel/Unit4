function createPigLatin(text){
    text = document.getElementById("input").value;
    words = text.split(" ");
    let newText = [];
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("");
        let begC = [];
        let begV = [];
        let placesC = [];
        let placesV = [];
        let begining = [];
        let transV =[]
        let ending = [];

        for(let j = 0; j < letters.length; j++){
            if((letters[j] == "b" || letters[j] == "c" || letters[j] == "d" || letters[j] == "f" || letters[j] == "g" || letters[j] == "h" || letters[j] == "j" || letters[j] == "k" || letters[j] == "l" || letters[j] == "m" || letters[j] == "n" || letters[j] == "p" || letters[j] == "q" || letters[j] == "r" || letters[j] == "s" || letters[j] == "t" || letters[j] == "v" || letters[j] == "w" || letters[j] == "x" || letters[j] == "y" || letters[j] == "z")){
                placesC.push(j);
            }else{
                placesV.push(j);
            }
            
        }
            if(placesV[0] >= 0){
                for(let l = Number(placesV[0]); l < letters.length; l++){
                    transV.push(letters[l]);
                };
            }
        
        if(placesC[0] == 0){
            for(let i = 0; Number(placesC[i]) < Number(placesV[0]); i++){
                begC.push(letters[i]);
            }
        }else{
            for(let k = 0; k < placesV.length; k++){
                begV.push(letters[Number(placesV[k])]);
            };
            begC.push("y");
        };
        begining = transV.join("");
        begC = begC.join("");
        ending = `${begC}ay`;
        let newWord = begining.concat(ending);
        let possibleN = [];
        console.log(letters.length);
        if(letters.length == 2 && letters[1] == "y"){
            possibleN.push(`${letters[1]}${letters[0]}`);
            newText.push([possibleN]);
        }
        newText.push(newWord);
    }

    newText = newText.join(" ");
    document.getElementById("output").textContent = newText;
}

