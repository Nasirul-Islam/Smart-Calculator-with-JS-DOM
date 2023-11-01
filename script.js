// Random color added
const cardItems = document.getElementsByClassName('cardItem');
for (let item of cardItems) {
    item.addEventListener('mouseover', function (event) {
        if (event.target === this) {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            event.target.style.backgroundColor = randomColor
        }
    })
    item.addEventListener('mouseout', function (event) {
        if (event.target === this) {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            event.target.style.backgroundColor = randomColor
        }
    })
}

// Calculation Part 
// document.getElementById("TriangleBtn").addEventListener("click", function (event) {
//     let i1Triangle = parseInt(document.getElementById("i1Triangle").value)
//     let i2Triangle = parseInt(document.getElementById("i2Triangle").value)
//     let result = 0.5 * i1Triangle * i2Triangle
//     let AreaCalculation = document.getElementById("AreaCalculation")
//     let p = document.createElement('p')
//     p.innerHTML = `1. Triangle ${result}cm<sup>2</sup>`
//     AreaCalculation.appendChild(p)
// })



function AreaCalculation(input1, input2, area){
    const input_field1 = document.getElementById(input1)
    const input_field2 = document.getElementById(input2)
    const AreaCalculation = document.getElementById("AreaCalculation")
    let i1Value = input_field1.value
    let i2Value = input_field2.value
    let result = 0
    let count = 0
    switch (area) {
        case 'Triangle':
            result = 0.5 * i1Value * i2Value
            break;
        case 'Rectangle':
            result = i1Value * i2Value
            break;
        case 'Parallelogram':
            result = i1Value * i2Value
            break;
        case 'Rhombus':
            result = 0.5 * i1Value * i2Value
            break;
        case 'Pentagon':
            result = 0.5 * i1Value * i2Value
            break;
        case 'Ellipse':
            result = 3.14 * i1Value * i2Value
            break;
        default:
            result = -1000
            break;
    }
    let p = document.createElement('p')
    p.innerHTML = `* Area of ${area} = ${result}cm<sup>2</sup>`
    AreaCalculation.appendChild(p)
    input_field1.value = ''
    input_field2.value = ''
    count +=1
}


document.getElementById("TriangleBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Triangle", "i2Triangle", "Triangle")
})
document.getElementById("RectangleBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Rectangle", "i2Rectangle", "Rectangle")
})
document.getElementById("ParallelogramBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Parallelogram", "i2Parallelogram", "Parallelogram")
})
document.getElementById("RhombusBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Rhombus", "i2Rhombus", "Rhombus")
})
document.getElementById("PentagonBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Pentagon", "i2Pentagon", "Pentagon")
})
document.getElementById("EllipseBtn").addEventListener("click", (e)=>{
    AreaCalculation("i1Ellipse", "i2Ellipse", "Ellipse")
})


// Experiment 
// document.getElementById('cardParent').addEventListener('click', function (event) {
//     let childs = event.target.parentNode.childNodes[5].childNodes
//     let input1 = childs[1]?.value
//     let input2 = childs[5]?.value
//     console.log(input1)
//     console.log(input2)
// })












document.getElementById('AreaCalculationText').addEventListener('mouseover', function (event) {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.color = randomColor
})
