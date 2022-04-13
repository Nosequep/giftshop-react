import PropTypes from 'prop-types';
import "./product-item.css"
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="product-container border bg-light rounded p-1 ">
        <div className="text-center border">
            <img src={props.imageUrl} className="img-fluid product-image" alt="image"/>
        </div>
        <div className="p-2 text-justify">
            <h6 className="text-product">{ props.name }</h6>
            <ul className="products-props text-product">
                <li>Price: { props.price}</li>
                <li>Category: { props.categoryName }</li>
            </ul>
        </div>
        <div className="mt-4">
        </div>
        <div className="button-container p-2">
            <Link className="btn btn-secondary" to={"/product/"+props.id}>Details</Link>
        </div>
    </div>
  );
}

ProductItem.prototype = {
    name: PropTypes.string.isRequired
}

ProductItem.defaultProps = {
    name: "Default"
};

export default ProductItem