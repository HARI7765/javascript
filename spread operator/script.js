// let a = [1, 2, 3, 4, 5]
// let b = [6, 7, 8, 9, 10]
// let c = [...a, ...b]
// console.log('a', a)
// console.log('c', c)



// let a = {name:'manu'}
// let b = {...a, age: 25,name:'mani'}
// console.log('a', b)


// let a = [1, 2, 3, 4, 5, 6]
// let [b,c,...d] = a
// console.log(b)
// console.log(c)
// console.log(d)


let a = {name :'manu',age:25,mark1:44,mark2:55,mark3:66}
let {name,age,...mark} = a
console.log(name)
console.log(age)
console.log(mark)