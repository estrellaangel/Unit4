//SUM OF EVERY NUMBER TO 100

    // let number = 0;
    // let sum = 0;

    // while(true){
    //     number = number +1;
    //     sum = sum + number;
    //     if(number == 1000){
    //         break;
    //     }
    // }
    // console.log(sum);

//SUM OF ODD NUMBERS FROM 93 TO 845

    // let number = 93;
    // let sum = 0;

    // while(true){
    //     number = number +2;
    //     sum = sum + number;
    //     if(number >= 845){
    //         break;
    //     }
    // }

    // console.log(sum);

//PRODUCT OF EVERY NUMBER THAT IS DIVISIBLE BY 6 FROM 1 TO 400
    // let base = 1;
    // let product = 1;

    // for(let i = 1; i<= 400; i++){
    //     if((i % 6) == 0){
    //         product*=i;
    //     }
    //     }
    //     console.log(product);

//USE LOOP TO DETERMINE IF INPUT IS PRIME

    // let num = +prompt(`Enter Number`);
    // let output = true;
    
    // for(let i = 2 ; i < num ; i++){
    //     if(num%i == 0){
    //         output = false;
    //         break;
    //     }
    // }

    // console.log(output);

//FIND EVERY PRIME NUMBER FROM 1 TO 100 

    let num = 100;

    main:
    for(let i = 2 ; i < num ; i++){
        if(num%i == 0){
            continue main;
        }else{
            console.log(i)
        }
    }

