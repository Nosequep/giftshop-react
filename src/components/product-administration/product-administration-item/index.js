const ProductAdministrationItem = (props) => {
  return (
    <tr>
      <td>
        <div className="border text-center">
          <img src={props.imageUrl} alt="image" className="img-fluid product-thumb" />
        </div>
      </td>
      <td>
        <div className="text-justify">
          {props.name}
        </div>
      </td>
      <td>{props.price}</td>
      <td>{props.categoryName}</td>
      <td>
        <div className="d-flex flex-md-row justify-content-center">
          <div className="mr-1">
            <button className="btn-primary rounded" title="edit" ><i className="fas fa-edit"></i></button>
          </div>
          <div>
            <button className="btn-danger rounded" title="delete" ><i className="fas fa-trash"></i></button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ProductAdministrationItem;