const prompt = require('prompt-sync')({sigint: true});

let numStudents = Number(prompt("How many students: "))

if(isNaN(numStudents)){
    console.log("Error")
}else if(numStudents % 3 == 0){
    console.log(`${numStudents/3} groups of 3`)
}else if(numStudents % 3 == 2){
    console.log(`${(numStudents - 2) / 3} groups of 3 and 1 group of 2`)
}else{
    console.log(`${(numStudents - 4) / 3} groups of 3 and 2 groups of 2`)
}