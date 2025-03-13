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


let div = document.querySelector('div')
let p = document.createElement('p')
p.innerHTML = 'Hello World'
div.appendChild(p)