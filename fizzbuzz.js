const prompt = require('prompt-sync')({sigint: true});

let numberInput = Number(prompt("Enter the number to be checked: "))

function divBy3(num){
    if(num % 3 === 0){
        return "Fizz"
    }else{
        return ''
    }
}
function divBy5(num){
    if(num % 5 === 0){
        return "Buzz"
    }else{
        return ''
    }
}

if(isNaN(numberInput)){
    console.log("Wrong!")
}else{
    console.log(`${divBy3(numberInput)}${divBy5(numberInput)}`)
}