// let a = document.querySelector("p")
// let b = document.querySelector("p1")
// let c = document.querySelectorAll("p2")
// console.log(a)
// console.log(b)
// console.log(c)

// let a = document.getElementById("p1")
// a.setAttribute("style", "color: red; ")
// a.setAttribute('class', 'a1')
// console.log(a.getAttribute('style'))
// a.classList.add('a2','a3')
// a.classList.remove('a2')


// let div = document.querySelector('div')
// let p = document.createElement('p')
// p.innerHTML = 'Hello World'
// div.appendChild(p)

// div.removeChild(p)

// function myfunction(){
//     let a = window.confirm('Are you sure?')
//     console.log(a)
// }


// const btn = document.querySelector('button')
// console.log(btn)
// btn.onclick = function(){
//     alert('Hello World')
//     }  // onclick event
// btn.onclick = () => alert('Hello ') // onclick event

// const a = document.querySelector('a')
// a.onclick = () => alert("clicked")

// const btn  = document.querySelector('button')
// btn.addEventListener('mouseenter',() => {
//     const p = document.querySelector('p')
//     p.style.color = 'red'
// })


// const btn = document.querySelector('button')
// btn.addEventListener('click',() => {
//     console.log('clicked')

//     setTimeout(() => {
//         alert ('Hello World')
//         }, 2000)
//         console.log('end')

// })


// setInterval(() => {
//     console.log('Hello World')
//     }, 1000)

const p = document.querySelector('p')
let a = 10
const x = setInterval(() => {
    a--
    p.textContent = a
    if(a === 0){
        clearInterval(x)
        }
        }, 1000) // 1 second