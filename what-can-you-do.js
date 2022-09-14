const prompt = require('prompt-sync')({sigint: true});

let age = Number(prompt("Enter your age: "))

function between(x, min, max) {
    return x >= min && x <= max;
}

if(isNaN(age)){
    console.log("Error: You did not enter a valid number.")
}else{
    if(age < 16){
        console.log("You can't drive.")
    }else if(between(age, 16, 17)){
        console.log("You can drive but not vote.")
    }else if(between(age, 18, 24)){
        console.log("You can vote but not rent a car.")
    }else{
        console.log("You can do pretty much anything.")
    }
}
