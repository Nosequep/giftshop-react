import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import ProductAdministrationItem from "./product-administration-item";
import './product-administration.css';

const ProductAdministration = () => {
  const products = [
    {imageUrl: "https://via.placeholder.com/150", name: "Producto1", price: "100", categoryName: "Electronics"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto2", price: "102", categoryName: "Books"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto3", price: "103", categoryName: "Home"},
    {imageUrl: "https://via.placeholder.com/150", name: "Producto4", price: "104", categoryName: "Home"}
  ];
  const [posts, setPosts] = useState(products);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const changePage = (data) => {
    setCurrentPage(data.selected);  
    setPosts([products[data.selected]]);
  }

  useEffect(() => {
    //setPosts(products);
  }, [])
  
  return (
    <div>
      <div className="mt-2 mb-1">
        <div className="d-flex flex-column flex-md-row">
          <div>
            <a className="btn btn-success"><i className="fas fa-plus-square"></i> Add product</a>
          </div>
          <div className="ml-md-auto mt-2 mt-md-0">
            <ReactPaginate
              previousLabel = {'Previous'}
              nextLabel = {'Next'}
              breakLabel = {'...'}
              pageCount = {100}
              marginPagesDisplayed={2}
              pageRangeDisplayed={1}
              onPageChange={changePage}
              containerClassName={'pagination row px-3 justify-content-center'}
              pageClassName={'page-item col-auto p-0'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item col-auto p-0'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item col-auto p-0'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item col-auto p-0'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive-lg">
        <table className="table table-bordered table-striped rounded">
          <thead className="thead-light">
            <tr>
              <th className="col-1">Image</th>
              <th className="col-7">Name</th>
              <th className="col-1">Price</th>
              <th className="col-1">Category</th>
              <th className="col-1"></th>
            </tr>
          </thead>
          <tbody >
            {posts.map((p, k) => 
              <ProductAdministrationItem key={k} {...p}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductAdministration;