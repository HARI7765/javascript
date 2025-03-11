function reverse(){
    let a = document.getElementById("input")
    let b = a.value.split("").reverse().join("")
    document.getElementById("result").innerHTML = b
}

