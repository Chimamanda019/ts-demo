const targetNumber : number = 33;
const guesses : number[] = [23, 67, 33, 51, 78];

for (let i : number = 0; i < 5; i++) {
    let guess = guesses[i];
    
    if (guess < targetNumber){
        console.log("You chose " + guess+ ", your guess is too low!");
    }
    else if(guess > targetNumber){
        console.log("You chose " + guess+ ", your guess is too high!");
    }
    else{
        console.log("You chose " + guess+ ", your guess is correct!");
    }
}