#! /usr/bin/env node
// BMI Calculator
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "weight",
        type: "number",
        message: "Enter weight in kg: "
    }
]);
const answer2 = await inquirer.prompt([{
        name: "height",
        type: "number",
        message: "Enter height in metres: "
    }
]);
let bmi = answer.weight / (answer2.height * answer2.height);
console.log(`Your bmi is ${bmi}`);
