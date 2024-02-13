import inquirer from "inquirer";
//-Step2
// const questions:QuestionCollection =[
//     {
//         name:'age',
//         type:'number',
//         message:"Enter Your Age ="
//     },
//     {
//         name:'name',
//         type:'input',
//         message:"Enter Your Name ="
//     }
// ];
// //-Setp1
//  let answers:Promise<Answers> =inquirer.prompt(questions);
//  //-Step3
//  answers.then((answers:Answers)=>{
//     console.log("answers", answers);
//  })
//  .catch((err)=>{
//     console.log("Something went Wrong");
//  })
//-Create a Calculator
const questions = [
    {
        name: 'num1',
        type: 'number',
        message: "Enter Num1 = "
    },
    {
        name: 'num2',
        type: 'number',
        message: "Enter Num2 = "
    },
    {
        name: 'operations',
        type: 'list',
        choices: ["+", "-", "*", "/"]
    }
];
let answers = inquirer.prompt(questions);
answers.then((answers) => {
    switch (answers.operations) {
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
    .catch((err) => {
    console.log("Something Went Wrong");
});
