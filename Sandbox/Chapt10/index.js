//single elements

const para = document.querySelector('p') //First one only
console.log(para)

const paraClass = document.querySelector("body > p.error")
console.log(paraClass)

//Multiple elements

const paras = document.querySelectorAll('p')
console.log(paras)
//can iterate through Node list
paras.forEach(para => {
    console.log(para)
})

//Get Element by ID
const title = document.getElementById('page-title')
console.log(title)

// get elements by class name

const errors = document.getElementsByClassName('error')
console.log(errors)

console.log(errors[0])
errors.forEach(error => {
    console.log(error)
})

const parasTag = document.getElementsByTagName('p')

let el = document.createElement('p');
let text = document.createTextNode(`this is some text`);
el.appendChild(text)
document.querySelector('#page-title').appendChild(el)

const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' New Text'
})

const content = document.querySelector('h1')
const people = ["Dave", "will", "frank"]

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})
