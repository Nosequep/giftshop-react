import { useState } from "react";
import ReactPaginate from "react-paginate";

const ProductSearchbar = (props) => {
    const paginationSpans = [5, 10, 15, 20, 25, 50, 100];
    const [name, setName] = useState("");
    const [pageSize, setPageSize] = useState(paginationSpans[0]);
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
   

    const onClick = () => {
        var paginateRequest = {
            page: currentPage,
            pageSize: pageSize,
            ...(name != "") && {term: name},
            ...(categoryId != 0) && {categoryId: categoryId}
        }
        props.onClick(paginateRequest);
    }

    const changePage = (data) => {
        setCurrentPage(data.selected+1); 
        onClick(); 
    }

    const onQuantityInputChange = (e) => {
        setPageSize(parseInt(e.target.value));
        console.log(pageSize);
        onClick();
    }

  return (
    <form>
        <div className="input-group">  
            <div className="input-group-prepend">  
                <select className="form-select" value={categoryId} onChange={e => setCategoryId(e.target.value)}> 
                    <optgroup label="Categories">
                        <option value="0">All</option>
                        {props.categories.map(c =>
                            <option  key={c.categoryId} value={c.categoryId}>{c.name}</option>
                        )}
                    </optgroup>
                </select>
            </div>
            <input type="search" className="form-control rounded" placeholder="Name" value={name} onChange={e => setName(e.target.value)} aria-label="Search" aria-describedby="search-addon"/>
            <div className="input-group-append">
                <button type="button" className="btn btn-outline-secondary" onClick={onClick}>search</button>
            </div>
        </div>
        <div className="d-flex flex-row  mt-2">
            <div className="ml-md-auto">
                <ReactPaginate 
                previousLabel = {'Previous'}
                nextLabel = {'Next'}
                breakLabel = {'...'}
                pageCount = {props.totalPages}
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
            <div className="">
                <select className="form-select flex py-2" value={pageSize} onChange={onQuantityInputChange}> 
                    {paginationSpans.map(x => <option key={x} value={x}>{x}</option>)}
                </select>
            </div>
        </div>
    </form>
  )
}

export default ProductSearchbar;