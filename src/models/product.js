import Category from "./category";

class Product {
    constructor() {
        this.name = "";
        this.imageUrl = "";
        this.price = 0;
        this.category = new Category();
        this.description = "";
    }
}

export default Product;