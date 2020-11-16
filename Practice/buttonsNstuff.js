    function power(){
        let num = Math.ceil(Math.random()*100)
        num = num**2;
    console.log(num);
    };
    function square(){
        let perfect = [];
        for(let i = 1; i<=100; i++){
            if(Math.ceil(Math.sqrt(i)) == Math.floor(Math.sqrt(i))){
                perfect.push(i);
            }
        }
        let random = (Math.ceil(Math.random()*(perfect.length))) - 1;
        console.log(perfect[random]);
    };
    function slope(){
        let decide = (Math.ceil(Math.random()*8))-1;
        let magic = ["yes", "no", "lol idk", "concentrate and ask again", "probably not", "don't count on it", "absolutly", "duhhh"];
        console.log(magic[decide]);
    };

    function pigLatin(text){
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
                if((letters[j] == "b" || letters[j] == "c" || letters[j] == "d" || letters[j] == "f" || letters[j] == "g" || letters[j] == "h" || letters[j] == "j" || letters[j] == "k" || letters[j] == "l" || letters[j] == "m" || letters[j] == "n" || letters[j] == "p" || letters[j] == "q" || letters[j] == "r" || letters[j] == "s" || letters[j] == "t" || letters[j] == "v" || letters[j] == "w" || letters[i] == "x" || letters[i] == "y" || letters[i] == "z")){
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
            };
            begining = transV.join("");
            begC = begC.join("");
            ending = `-${begC}ay`;
            let newWord = begining.concat(ending);

            newText.push(newWord);
        }

        newText = newText.join(" ");
        console.log(newText);
    }

    pigLatin(`super cool`);