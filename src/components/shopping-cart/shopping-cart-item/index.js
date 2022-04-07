import { useState } from "react";

const ShoppincartItem = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    return (
        <tr className="bg-white" >                
            <td>
                <div>
                    <img src={props.imageUrl} className="img-thumbnail mx-auto d-block" />
                </div>
            </td>
            <td>{props.product}</td>
            <td>
                <div>
                    <input type="number" value={quantity} onChange={event => setQuantity(event.target.value)} min="0" max="100"/>
                </div>
            </td>
            <td>
                <div className="d-flex flex-md-row justify-content-center">
                    <button className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                </div>
            </td>
        </tr>
    );
}

export default ShoppincartItem;