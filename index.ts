#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

const generatedNo =Math.floor( Math.random()*10)+1;

console.log(chalk.magenta.bold("============&&&&&&&&&&&&&============= WELCOME TO THE NUMBER GUESSING GAME ============&&&&&&&&&&&&============"));
while (true) {
    const answers = await inquirer.prompt(
    [
       {
        type: "number",
        name: "userGuess",
        message: chalk.yellow("Enter your Guessing Number Between 1 to 10:")
       }

    ]
)
const userGuess:any =answers;

if (answers.userGuess === generatedNo) {
     console.log(chalk.green.bold.italic(" YOU  GUESS THE CORRECT NUMBER: \n ========  YOU WIN!  ========"));
     console.log(chalk.bgBlue('=================  THANKS FOR USING THIS APP  =================='));
     
    break;
} else {
    console.log(chalk.red.italic("===============  INVALID NUMBER! ==============\n          PLEASE TRY AGAIN...  "));
    
}
}
