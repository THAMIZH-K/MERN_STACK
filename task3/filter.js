var num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function even(elements) {
    return elements % 2 === 0
}
function odd(elements) {
    return elements % 2 !== 0
}

var evennum = num.filter(even)
console.log(evennum)

var oddnum = num.filter(odd)


console.log(oddnum)


// adult filtering
const age=[19,18,25,17,18,60,55]

function adult(elements)
{
    return elements>=18 && elements<=25
}


var adults=age.filter(adult)
console.log(adults)