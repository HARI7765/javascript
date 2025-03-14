// timer of 2:00

// timer using else if statement
// let clock = document.getElementById('clock');
// let a = 60;
// let b = 60;
// let c = 60;

// const x = setInterval(() => {
//     if (a > 0) {
//         a--;
//         clock.innerHTML = `02:${a}`;
//     } else if (b > 0) {
//         b--;
//         clock.innerHTML = `01:${b}`;
//     }
//     else if (c > 0) {
//         c--;
//         clock.innerHTML = `00:${c}`;
//     }

//     if (c === 0) {
//         clearInterval(x);
//     }
// }, 1000);

const clock = document.getElementById('clock');
let m = 1
let s = 60
const x = setInterval(() => {
    s--
    clock.innerHTML = `${m}:${s}`
    if (s === 0) {
        m--
        s = 59
        if(m<0){
            clearInterval(x)
        }
    }  
    }, 1000)
