const prompt = require('prompt-sync')({sigint: true});

let planetObj = {
    1:["Venus", 0.78],
    2:["Mars", 0.39],
    3:["Jupiter", 2.65],
    4:["Saturn", 1.17],
    5:["Uranus", 1.05],
    6:["Neptune", 1.23],
}

let weight = Number(prompt("Enter Earth weight: "))
let planet = prompt("Enter planet number: ")

if(isNaN(weight)||!Object.keys(planetObj).includes(planet)){
    console.log("Error: Invalid entry.")
}else{
    let chosenPlanet = planetObj[planet]
    console.log(`${weight} on ${chosenPlanet[0]} is ${weight * chosenPlanet[1]}`)
}