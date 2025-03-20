// try {
//     console.log(a)
// }
// catch (error){
//     console.log("Error: ", error.message)
// }
// finally{
//     console.log("programs ends")
// }



try{
    const a = parseInt('abc')
    if (isNaN(a)){
        throw new console.error(' a is not a number');
        
    }
    }
catch (error){
    console.log("Error: ", error.message)
    }
    finally{
        console.log("programs ends")
    }
