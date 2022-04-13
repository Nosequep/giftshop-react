import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Product from "../../models/product";


import axios from "axios";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(new Product());
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  
  useEffect(() => {
    axios.get(`https://localhost:5001/api/products/id/${params.id}`)
      .then(response => {
          setProduct(response.data);
      })
      .catch(error => {
          console.log(error);
      });
  }, [])

  return (
    <div className="container mb-2">
      <div className="row  border bg-light rounded py-5">
        <div className="d-flex flex-lg-row col-lg-3 pt-2 pb-2 align-self-center justify-content-center">
          <div className="container-fluid border rounded bg-secondary pb-5 pt-5  text-center">
            <img className="img-fluid product-image" src={product.imageUrl}/>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="mb-0">
            <p className="text-dark text-justify">{product.name}</p>
          </h3>
          <div className="mb-1 text-muted">Publication date: {}</div>
          <div className="mb-1 text-muted">Category: {product.category.name}</div>
          <p className="card-text mb-auto text-justify">{product.description}</p>
        </div>
        <div className="col-lg-3 pt-2 pb-2 align-self-center">
          <div className="contenedor container border rounded bg-secondary pb-5 pt-5">
            <div >  
              <label className="quantity-label text-white"><strong>Unit price:</strong> {product.price  }</label>
            </div>
            <div className="row"> 
              <div className="col-md-5">  
                <label className="quantity-label text-white">Quantity: </label>
              </div>
              <div className="col-md-7">
                <input type="number" className="col-12"  min="" max="" value={quantity} onChange={(e) =>setQuantity(e.target.value)}/>
              </div>
            </div>
            <div className="mt-2">
              <button className="btn btn-success col-12" >Add to cart</button>
            </div>
            <div className="mt-2 text-center">
              <a className="return-link text-white">Return to product list</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;