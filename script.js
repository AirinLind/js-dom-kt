function addSquare() {
    return `<td></td>`
}

function addStr() {
    return `<tr></tr>`
}

let tabbody = document.body.childNodes[3].childNodes[1]
console.log(tabbody)

function genNum() {
    return Math.floor(Math.random() * 99)
}

let arr = []
for (let i = 0; i < 31; ++i) {
    arr[i] = genNum()
}

function genSquare() {
    let number = genNum()
    return `<td class="square ${number > 49 ? 'orange' : ''}">${number}</td>`
}

function foo() {
    if (tabbody.lastChild.childNodes.length == 5) {
        tabbody.innerHTML += addStr()
    } tabbody.lastChild.innerHTML += genSquare()
}

for (let a = 1; a < 7; a++) {
    tabbody.innerHTML += addStr()
    for (let b = 1; b < 6; b++) {
    tabbody.lastChild.innerHTML += `<td class="square ${arr[a * b - 1] > 49 ? 'orange' : ''}">${arr[a * b - 1]}</td>`
    }
}

console.log(tabbody)
