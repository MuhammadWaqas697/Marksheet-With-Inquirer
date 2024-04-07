#! /usr/bin/env node 
import inquirer from "inquirer";
let totalMarks = 300;
const answer = await inquirer.prompt([
    {
        name: "Physicsmarks",
        type: "number",
        message: "Please enter your physics marks"
    },
    {
        name: "Chemistrymarks",
        type: "number",
        message: "Please enter your chemistry marks"
    },
    {
        name: "Mathmarks",
        type: "number",
        message: "Please enter your Math marks marks"
    }
]);
const obtainedMarks = answer.Physicsmarks + answer.Chemistrymarks + answer.Mathmarks;
console.log("You obtained marks is:", obtainedMarks);
const obtainedPercentage = (obtainedMarks / totalMarks * 100);
console.log("Your percentage is:", obtainedPercentage.toFixed(2));
if (obtainedPercentage >= 80) {
    console.log(`Congratulation you got ${obtainedPercentage}% and your grade is A+`);
}
else if (obtainedPercentage >= 70) {
    console.log(`Congratulation you got ${obtainedPercentage}% and your grade is A`);
}
else if (obtainedPercentage >= 60) {
    console.log(`Congratulation you got ${obtainedPercentage}% and your grade is B`);
}
else if (obtainedPercentage >= 50) {
    console.log(`Congratulation you got ${obtainedPercentage}% and your grade is C `);
}
else if (obtainedPercentage < 50) {
    console.log(`Sorry your percentage is consider to FAIL \n Please keep it up your hard work!`);
}
