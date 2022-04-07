const ProductSearchbar = (props) => {
  return (
    <form>
        <div className="input-group">  
            <div className="input-group-prepend">  
                <select className="form-select"> 
                    <optgroup label="Categories">
                        <option value="0">All</option>
                        {props.categories.map(c =>
                            <option  key={c.id} value={c.id}>{c.name}</option>
                        )}
                    </optgroup>
                </select>
            </div>
            <input type="search" className="form-control rounded" placeholder="Name" aria-label="Search" aria-describedby="search-addon"/>
            <div className="input-group-append">
                <button type="button" className="btn btn-outline-secondary">search</button>
            </div>
        </div>
    </form>
  )
}

export default ProductSearchbar;