//glue between view and model

import productOperations from "../services/product-operations.js";

// control I/O UI
//Data Exchange btw view and model
 async function loadPizzas(){
    const pizzas= await productOperations.loadProducts();
    console.log('Pizzas are',pizzas);
    for(let pizza of pizzas){
        preparepizzacard(pizza);
    }
}
loadPizzas();
// export default loadPizzas;
/* <div class="col-4">
<div class="card" style="width: 18rem;">
    <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
</div>
</div> */
//we need dynamic html hence will create card using preparepizzacard 
//an equivalent DOM is created
function addToCart(){
    //this-keywork contains reference of current calling object
    console.log("Add to cart called....",this);
    const currentbtn=this;
    currentbtn.innerText='Added';
    const pizzaId=currentbtn.getAttribute('product-id');//pizza id is set as value of button product-id attribute
    console.log('Pizza ID is',pizzaId);
    productOperations.search(pizzaId);
    printBasket();
    // document.getElementById('total').appendChild(printTotal(cartproducts));
    
}
function printBasket(){
    const cartproducts=productOperations.getProductsInCart();
    const basket=document.querySelector('#basket');
    basket.innerHTML='';
    // cartproducts.forEach(p=>printBasketItem(p));
    for(let product of cartproducts){
     const Li= document.createElement('li');
     Li.innerText=`${product.name} ${product.price}`;
     basket.appendChild(Li);
    }
    // const total=document.getElementById('total').appendChild(printTotal(cartProducts));
    printTotal(cartproducts);
    
}
// function printBasketItem(product){
//     const Li= document.createElement('li');
//      Li.innerText=`${product.name} ${product.price+" $"}`;
//     document.getElementById('basket').appendChild(Li);
// }
function printTotal(cartproducts){
    const total=cartproducts.reduce((acc,product)=>acc+parseFloat(product.price),0);
    const ptag=document.getElementById('total');
    ptag.innerHTML='Total '+total.toFixed(2)+"$";
    return ptag;

}
function preparepizzacard(pizza){
   const outputDiv=document.querySelector('#output');
   const coldiv=document.createElement('div');
   coldiv.className='col-4';
   const cardDiv=document.createElement('div');
   cardDiv.className='card';
   cardDiv.style="width: 15rem;";
   coldiv.appendChild(cardDiv);
   const imgtag=document.createElement('img');
   imgtag.src=pizza.url;
   imgtag.className='card-img-top';
   cardDiv.appendChild(imgtag);
   const cardbody=document.createElement('div');
   cardbody.className='card-body';
   cardDiv.appendChild(cardbody);
   const h5=document.createElement('h5');
   h5.className='card-title';
   h5.innerText=pizza.name;
   const ptag=document.createElement('div');
   ptag.className='card-text';
   ptag.innerText=pizza.desc;
   ptag.style='margin-bottom:10px';
   const button=document.createElement('button');
   button.setAttribute('product-id',pizza.id);
   button.className='btn btn-primary';
   button.style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .7rem; --bs-btn-font-size: .75rem;"
   button.innerText='Add to Cart';
   button.addEventListener('click',addToCart); //Event binding
   cardbody.appendChild(h5);
   cardbody.appendChild(ptag);
   cardbody.appendChild(button);
   outputDiv.appendChild(coldiv);
}