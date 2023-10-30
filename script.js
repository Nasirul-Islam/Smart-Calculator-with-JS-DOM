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
document.getElementById("TriangleBtn").addEventListener("click", function (event) {
    let i1Triangle = parseInt(document.getElementById("i1Triangle").value)
    let i2Triangle = parseInt(document.getElementById("i2Triangle").value)
    let result = 0.5 * i1Triangle * i2Triangle
    let AreaCalculation = document.getElementById("AreaCalculation")
    let p = document.createElement('p')
    p.innerHTML = `1. Triangle ${result}cm<sup>2</sup>`
    AreaCalculation.appendChild(p)
    console.log(result)
})

document.getElementById("RectangleBtn").addEventListener("click", function (event) {
    let i1Rectangle = parseInt(document.getElementById("i1Rectangle").value)
    let i2Rectangle = parseInt(document.getElementById("i2Rectangle").value)
    let result = 0.5 * i1Rectangle * i2Rectangle
    let AreaCalculation = document.getElementById("AreaCalculation")
    let p = document.createElement('p')
    p.innerHTML = `2. Rectangle ${result}cm<sup>2</sup>`
    AreaCalculation.appendChild(p)
    console.log(result)
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
