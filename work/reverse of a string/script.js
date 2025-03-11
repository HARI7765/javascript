// function reverse(){
//     let a = document.getElementById("input")
//     let b = a.value.split("").reverse().join("")
//     document.getElementById("result").innerHTML = b
// }


// using for loop


function reverse() {
    let inputText = document.getElementById("input").value;
    let reversedText = "";

    for (let i = inputText.length - 1; i >= 0; i--) {
        reversedText += inputText[i];
    }

    document.getElementById("result").textContent = reversedText;
}

