// let i=1
// while (i<=10) {
//   alert(i)
//   console.log(i)
//   i++
// }

// let i=1
// do {
//     alert(i)
//     console.log(i)
//     i++
// } 
// while (i<=10)

// for (let i=1; i<=10; i++) {
//     alert(i)
//     console.log(i)
// }
// let l=[10,20,30,40,50]
// for (i in l) {
//     console.log(l[i])
// }
// for (i of l) {
//     console.log(i)
//     i++
// }
// while (i<=10) 

// for (let i=1; i<=10; i++) {
// alert(i)
// console.log(i)
// }

// let l=[10,20,30,40,50]
// for (i in l) {
// console.log(l[i])
// }
// for (i of l) {
// console.log(i)
// }

// let d = {name:"akhil",age:25}
// for (i in d) {
// console.log(d[i])
// }
// for (i of d) {
//     console.log(i)
// }


// let a = parseInt(prompt("Enter a number"))
// let b = parseInt(prompt("Enter a number"))
// console.log(a),console.log(typeof a)
// console.log(b),console.log(typeof b)
// alert(a),alert(typeof a)
// alert(b),alert(typeof b)


// let a = parseInt(prompt("Enter a 1st number"))
// let b = parseInt(prompt("Enter a 2nd number"))
// let sum = 0
// for (let i=a; i<=b; i++) {
//     sum = sum + i
// }
// console.log(sum)
// alert(sum)

// reverse of String
let str = "Hello World"
let rev = ""
for (let i=str.length-1; i>=0; i--) {
    rev = rev + str[i]
    }
    console.log(rev)
    alert(rev)

// sum of digits



// factorial of a number
function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));
// fibinocii series
let num = parseInt(prompt("Enter a number"))
let a = 0, b = 1
let febi = [a, b]
for (let i = 2; i < num; i++) {
    let c = a + b
    febi.push(c)
    a = b
    b = c
    }

// starting  number and ending number and push into array
let start = parseInt(prompt("Enter a number"))
let end = parseInt(prompt("Enter a number"))
let arr = []
for (let i = start; i <= end; i++) {
    arr.push(i)
    }
    console.log(arr)
    alert(arr)

