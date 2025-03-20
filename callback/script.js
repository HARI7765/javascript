// function todo(task,callback){
//     console.log('starting ',task)
//     setTimeout(()=>{
//         console.log('ending ',task);
//         callback() 
//     },1000)
// }
// todo("task1",()=>console.log('task1 completed'))

function step1(callback){
    setTimeout(()=>{
        console.log('step1 completed')
        callback()
        },1000)
}
function step2(callback){
    setTimeout(()=>{
        console.log('step2 completed')
        callback()
        },1000)
}
function step3(callback){
    setTimeout(()=>{
        console.log('step3 completed')
        callback()
        },1000)
        }
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log('all steps completed')
            })
            })
})