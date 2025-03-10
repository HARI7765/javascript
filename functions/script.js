// function
function fun1(name,age=0){
    console.log(name,age)
}
fun1("John",20)

// nameless function
const data = function(a,b){
    console.log("hello",a,b)
}
data("abc",20)

// arrow function
const data1 = () => {
    console.log("hello")
    console.log("world")
}
data1()