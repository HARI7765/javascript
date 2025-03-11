// let p = document.getElementsByTagName('p')
// console.log(p)


// let a = document.getElementsByClassName('p')[1]
// console.log(a)


let a = document.getElementById('L')
console.log(a)

a.innerHTML = "Hello World"
a.innerHTML = `<a href="">link</a>`

function getdata() {
    let a = document.getElementById("input")
    console.log(a.value)
    document.getElementById("p").innerHTML =(a.value)
    }