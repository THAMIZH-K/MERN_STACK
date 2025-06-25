const num=[1,2,3,4,5]
const squares= num.map(square)
console.log(squares)
const cubes= num.map(cube)
console.log(cubes)


function square(elements)
{
    return Math.pow(elements,2)
}

function cube(elements)
{
    return Math.pow(elements,3)
}
