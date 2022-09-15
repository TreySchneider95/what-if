const prompt = require('prompt-sync')({sigint: true});

let numberInput = Number(prompt("Enter the number to be checked: "))

function divBy3or5(num){
    let returnWord = ''
    if(num % 3 === 0){
        returnWord += "Fizz"
    }
    if(num % 5 === 0){
        returnWord += "Buzz"
    }
    if(!returnWord){
        returnWord = "Not divisible by 3 or 5"
    }
    return returnWord
}

if(isNaN(numberInput)){
    console.log("Error: invalid input")
}else{
    console.log(`${divBy3or5(numberInput)}`)
}