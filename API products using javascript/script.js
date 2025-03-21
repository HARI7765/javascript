
// async function fetdata(){
//     try{
//         const response = await fetch('https://dummyjson.com/products');
//         const product = await response.json();
//         console.log('product'.product);
//     }catch(error){

//     }
// }
// fetdata()







// async function fetdata() {
//     try{
//         const response = await fetch('https://dummyjson.com/products');
//         const product = await response.json()
//         const data = product.products
//         const div = document.querySelector('.div')


//         data.forEach(item =>{
//             console.log(item.title)
//             const h1 = document.createElement('h1')
//             h1.innerHTML=item.title
//             div.appendChild(h1)
//         })

//     }catch(error){

//     }
// }
//     fetdata()








async function fetdata() {
    try{
        const response = await fetch('https://dummyjson.com/products');
        const product = await response.json()
        const data = product.products
        const div = document.querySelector('.div')


        data.forEach(item =>{
            console.log(item)

            div.innerHTML += `
                <div class="col-lg-4">
                    <div class="card" style="100%">
                        <img class="card-img-top" src="${item.thumbnail}" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">${item.title}</h4>
                                <p class="card-text">${item.description}</p>
                                <p class="card-text">${item.price}</p>
                                <p class="card-text">${item.category}</p>
                                <p class="card-text">${item.discountPercentage}</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                            </div>
                    </div>
                </div>
        `
        })

    }catch(error){

    }
}
    fetdata()