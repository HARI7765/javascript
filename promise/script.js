// function step1(callback){
//    return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log('step1 completed')
//         resolve()
//         },1000)
// })
// }
// function step2(callback){
//     return new Promise((resolve)=>{
//      setTimeout(()=>{
//          console.log('step2 completed')
//          resolve()
//          },1000)
//  })
//  }function step3(callback){
//     return new Promise((resolve)=>{
//      setTimeout(()=>{
//          console.log('step3 completed')
//          resolve()
//          },1000)
//  })
//  }
// step1()
//       .then(step2)
//       .then(step3)
//       .then(()=>{
//         console.log('all steps completed')
//       })

const data = new Promise((resolve, reject) => {
    if (true) {
        resolve('resolved');
    } else {
        reject('rejected');
    }
});

console.log(data);

data.then((message) => {
    console.log(message);  // Logs 'resolved' if true condition is met
}).catch((message) => {
    console.log(message);  // Will not be executed since the promise resolves
}).finally(() => {
    console.log('finally');  // Will always execute
});
