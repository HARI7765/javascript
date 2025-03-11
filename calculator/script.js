function add(){
    let a = document.getElementById('num1')
    let b = document.getElementById('num2')
    let c = parseInt(a.value) + parseInt(b.value)
    document.getElementById("result").innerHTML = c


}
function  sub(){
    let a = document.getElementById('num1')
    let b = document.getElementById('num2')
    let c = parseInt(a.value) - parseInt(b.value)
    document.getElementById("result").innerHTML = c


}
function  mul(){
    let a = document.getElementById('num1')
    let b = document.getElementById('num2')
    let c = parseInt(a.value) * parseInt(b.value)
    document.getElementById("result").innerHTML = c
}
function  div(){
    let a = document.getElementById('num1')
    let b = document.getElementById('num2')
    let c = parseInt(a.value) / parseInt(b.value)
    document.getElementById("result").innerHTML = c
}
