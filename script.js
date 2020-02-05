let doTheThing = function(){

    //Computer picks a number.

    /* Loops have three parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSIONS; CONTROL INCREMENT/DECREMENT/UPDATE

    CONTROL VARIABLE - Controls when the loop executes. (Count)

    CONTROL BOOLEAN EXPRESSION - Boolean expression using the control variable which should at some point evaluate to false.

    CONTROL UPDATE - Assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false.

     */

   let restart = "Yes";
   while(restart === "Yes"){
       let computerNumber = Math.floor((Math.random()*10)+1);
       //Computer alerts to get players guess.

       //Compare guess to actual number.
       //If higher - alert "Too high" and then get player's guess.
       // If lower - Alert "too low" and then get player's guess.

       let playersGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);
       while(playersGuess !== computerNumber){
           if(playersGuess > computerNumber){
               playersGuess = parseInt(prompt("Too high, guess again."),10);
           }else{
               playersGuess = parseInt(prompt("Too low, guess again."), 10);
           }
       }

       alert("YOU GUESSED IT! I hope you feel very acomplished.");

       restart = prompt("Would you like to play again? Type 'Yes' or 'No'(case sensitive)");

   }


    //If equal  - Alert you win and then ask to restart.
        //If yes - repeat from beginning.
        //If no - set computer on fire and escape.

};

let doTheOtherThing = function(){

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;

    do {
        let computerNumber = Math.floor((Math.random() * 10) + 1);
        let playersGuess;
        do {
            playersGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);

            if (playersGuess > computerNumber){
                playersGuess = parseInt(prompt("Too high, guess again."), 10);
            } else
                playersGuess = parseInt(prompt("Too low, guess again."), 10);

            }while (playersGuess !== computerNumber);

                alert("YOU GUESSED IT! I hope you feel very acomplished.");
            restart = prompt("Would you like to play again? Type 'Yes' or 'No'(case sensitive)");
        } while (restart === "Yes");

};