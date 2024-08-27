//fetched products from project.js and perform crud opeartions, create,read,update,delete
//coverts JSON into objects vice-versa
import Product from "../models/product.js";
import doNetworkCall from "./api-client.js";
const productOperations={
    products:[],//key-value
    search(pizzaId){
        const product=this.products.
        find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product found',product);
        product.isAddedInCart=true;
        console.log('Array',this.products);

    },
    getProductsInCart(){
      const productIntBasket=this.products.filter(product=>product.isAddedInCart==true);
      return productIntBasket;
    },
    async loadProducts(){
       const pizzas=await doNetworkCall();
       const pizzaArray=pizzas['Vegetarian'];
       const productArray=pizzaArray.map(pizza=>{
        const current=new Product(pizza.id,pizza.name,pizza.menu_description, pizza.price,pizza.assets.product_details_page[0].url);
        return current;
       })
       console.log('Product Array',productArray);
       this.products=productArray;//alias name it refers to the object productOperations
       return productArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
}
export default productOperations;