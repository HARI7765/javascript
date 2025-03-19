// class synnefo{
//     constructor(){
//         this.a=10
//         console.log("register");
        
//     }
//     python(){
//         console.log("python");
        
//     }
//     mern(){
//         console.log("mern");
        
//     }
// }
// class novavi extends synnefo{
//     constructor(){
//         console.log("novavi registration");
//         super();
//     }
//     dev(){
//         console.log("dev");
//     }
// }
        

// manu = new synnefo();
// manu.python();
// manu.mern();
// console.log(manu);

// staff = new novavi();
// staff.dev();

// ___________prototypical______________


const data = {
    greet : function(){
        console.log("hello");
        }
    }
    a1 = Object.create(data);
    a1.greet();
    console.log(a1)