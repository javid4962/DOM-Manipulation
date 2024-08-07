// let body = document.body
// let h1 = document.createElement('h1')
// // h1.innerText = 'hello'
// function hello(){
//   h1.innerHTML= "Monkey D Luffy";
// }
// function hello1(){
//   h1.innerHTML= "Gol D Rogger";
// }
// body.append(h1)


// const body = document.body
// const i = document.createElement('i')
// i.innerHTML = 'Hello'
// body.append([i,i], ' World', ' war')
// console.log(i.innerText)


// Adding Element to the page
// const body = document.body
// body.append('Hello All')


// Creating Element
// const body = document.body
// const div = document.createElement('div')
// body.append(div)


// Modifying Element Text
// const div = document.querySelector("div")
// console.log(div.textContent)
// console.log(div.innerText)


// Modifying Element HTML
// const body = document.body
// const div = document.createElement('div')
// div.innerHTML = "<strong>Hello World</strong>"
// body.append(div)
// (or)
// const body = document.body
// const div = document.createElement('div')
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 2"
// div.append(strong)
// body.append(div)


// Removing Element
// const body = document.body
// const div = document.querySelector('#div')
// const spanHi = document.querySelector('#hi')
// const spanBye = document.querySelector('#bye')
// // spanBye.remove()
// // div.append(spanBye)
// div.removeChild(spanHi)


// Modifying Element Attribute
// const spanHi = document.querySelector('#hi')
// console.log(spanHi.getAttribute('title'))
// console.log(spanHi.setAttribute('title', 'Greetings'))
// console.log(spanHi.getAttribute('title'))
// spanHi.title = 'Greet'
// console.log(spanHi.getAttribute('title'))


// Modifying Data Attributes
// const spanHi = document.querySelector('#hi')
// console.log(spanHi.dataset)
// console.log(spanHi.dataset.test)


// Modifying Element Classes
const spanHi = document.querySelector('#hi')
// console.log(spanHi.classList)
// spanHi.classList.add('hello')
// spanHi.classList.remove('hi1')
// spanHi.classList.toggle('hi3')
spanHi.classList.toggle('hi2', false)