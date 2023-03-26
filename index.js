// code your solution here

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function wrapAdjective(highLight = "*") {
    return function(adjective) {
        return (`You are ${highLight}${adjective}${highLight}!`);
    }
}




console.log(mondayWork());
console.log(saturdayFun('bathe my dog'));

console.log(wrapAdjective()('a hard worker'));
console.log(wrapAdjective("||")('a hard worker'));
