var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames)

var enemyHealth = 50;

var enemyAttack = 12;


var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {

        //FIGHT or Skip Prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.")


        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney ", playerMoney);

                break;
            }

        }


        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

  
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;
                
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

  
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
  

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");

                break;
            }
            else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        }


        else {
            window.alert("You need to choose a valid option. Try again!");
        }

    }

}


// function to start new game
var startGame = function() {

    //reset player stats
    playerHealth = 100;

    playerAttack = 10;

    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {
    
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            var pickedEnemyName = enemyNames[i];
    
            enemyHealth = 50;
        
            fight(pickedEnemyName);
        
        }
    
        else {
    
            window.alert("You have lost your robot in battle! Game Over!");
            
            break;
            
        }
    
    }    

    // loop end, play again or defeat
    endGame();

};


//function to end the entire game
var endGame = function() {

    // Player Win
    if (playerHealth > 0) {

        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");

    }
    else {

        window.alert("You've lost your robot in battle.")

    }

    // Play again query
    var playAgainConfrim = window.confirm("Would you like to play again?");

    if (playAgainConfrim) {

        //restart game
        startGame();
    }
    else {

        window.alert("Thank you for playing Robot Gladiators! Come back soon!")

    }
}


// start the game when the page loads
startGame();