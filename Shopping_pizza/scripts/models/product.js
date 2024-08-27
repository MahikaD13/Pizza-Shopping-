//Product model (Blue print)
//pizza object id,name,desc,price,rating
class Product{
    constructor(id,name,desc,price,url){
        this.id=id;
        this.name=name;
        this.price=price;
        this.desc=desc;
        this.url=url;
        this.isAddedInCart=false;
    }
}
export default Product;