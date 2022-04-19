import Category from "./category";

class Product {
    constructor() {
        this.id = ""
        this.name = "";
        this.imageUrl = "";
        this.price = 0;
        this.category = new Category();
        this.description = "";
        this.publishedDate = "";
    }
}

export default Product;