// const data = {
//     fname: "manu",
//     lname: "kumar",
//     fullname: function() {
//         console.log(this.fname, this.lname);
//     }
// };

// console.log(data);
// data.fullname();


// ___________CALL  method__________________


// const nameobj ={
//     fname:"nani",
//     age:20
// }
// const data = {
//     fname: "manu",
//     lname: "kumar",
//     fullname: function() {
//         console.log(this.fname);
//     }
// };

// console.log(data);
// data.fullname.call(nameobj);

// ______________blind______________________


const nameobj ={
    fname:"nani",
    age:20
}
const data = {
    fname: "manu",
    lname: "kumar",
    fullname: function() {
        console.log(this.fname,age);
    }
};

console.log(data);
const d1 = data.fullname.bind(nameobj);
d1( 20); // 20 is age


