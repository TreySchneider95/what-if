const prompt = require('prompt-sync')({sigint: true});

const weekDayObj = {1:"Monday", 2:"Tuesday", 3: "Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"}

let dayNum = prompt("Enter the number: ")
if(!Object.keys(weekDayObj).includes(dayNum)){
    console.log("Error: Not a valid input.")
}else{
    console.log(weekDayObj[dayNum])
}