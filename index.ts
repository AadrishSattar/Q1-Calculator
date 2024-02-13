import inquirer, { Answers, QuestionCollection } from "inquirer";

//-Create a Calculator
const questions:QuestionCollection = [
    {
        name:'num1',
        type:'number',
        message:"Enter Num1 = "
    },
    {
        name:'num2',
        type:'number',
        message:"Enter Num2 = "
    },
    {
        name:'operations',
        type:'list',
        choices:["+", "-", "*", "/"]
    }
];

let answers:Promise<Answers> = inquirer.prompt(questions);
answers.then((answers:Answers)=>{
    switch(answers.operations){
        case "+":
            console.log(answers.num1 + answers.num2);
            break;
        case "-":
            console.log(answers.num1 - answers.num2);
            break;    
        case "*":
            console.log(answers.num1 * answers.num2);
            break;
        case "/":
            console.log(answers.num1 / answers.num2);
            break;                    
    }
    
})
.catch((err)=>{
    console.log("Something Went Wrong");
})
