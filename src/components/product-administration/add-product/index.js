const AddProduct = (props) => {
    return (
        <div >
            <div class="mt-2">
                <a class="btn btn-primary"><i class="fas fa-arrow-alt-circle-left"> Go back</i></a>
            </div>
            <form class="p-2">
                <div class="row">
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="name">Product name</label>
                            <input type="text" id="name" class="form-control" name="name" formControlName="name" maxlength="{{nameMaxLength}}"/>
                            <div>
                                <small class="text-danger"  >Product name is required </small>
                            </div>
                        </div>
                    </div>
                    <div class="col"> 
                        <div class="form-outline">
                            <label class="form-label" for="price">Price</label>
                            <input type="number" id="price" class="form-control" min="{{priceMin}}" max="{{priceMax}}" maxlength="{{priceMaxLength}}"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <label class="form-label" for="categoryId">Category</label>
                            <select class="form-select flex form-control" id="categoryId"> 
                                <optgroup label="Categories">
                                    <option>{}</option>
                                </optgroup>
                            </select>
                            <small class="text-danger">Product category is required</small>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <div class="form-outline-fluid">
                        <label class="form-label" for="description">Description</label>
                        <textarea id="description" class="form-control" maxlength="{{descriptionMaxLength}}"></textarea>
                        
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col align-self-center">
                        <div class="form-outline ">
                            <label class="form-label" for="url">Image URL</label>
                            <input type="text" id="url" class="form-control" formControlName="imageUrl"/>
                            <small class="text-danger" >Invalid URL</small>
                        </div>
                        <div class="mt-2">
                            <input type="button" class="btn btn-secondary col-md-3" value="Upload image"/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center border">
                            <div class="img-container my-1">
                                <img class="img-fluid product-thumb border" src="{}" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-center mb-2 mt-2">
                    <input type="submit" class="btn btn-secondary col-md-3" value="Save"/>
                </div>
            </form>
        </div>
    );
  }
  
  export default AddProduct;