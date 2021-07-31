function Product(props)  {
            let productList = props.data.products.filter(product => product.inCart === true).map((product, index) => {
            return(<div className="row" key={index}>
                <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70" alt=""/>
                </div>
                <div className="col-xs-4">
                    <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                </div>
                <div className="col-xs-6">
                    <div className="col-xs-6 text-right">
                        <h6><strong> {product.price} <span className="text-muted">x</span></strong></h6>
                    </div>
                    <div className="col-xs-4">
                        <input className="form-control input-sm" name="quantity" type="number" onChange={e => props.inputHandler(e, index)}></input>
                    </div>
                    <div className="col-xs-2">
                        <button type="button" className="btn btn-link btn-xs" name="quantity" onClick={e => props.removeItem(product.id)}>
                            <span className="glyphicon glyphicon-trash" name="quantity"> </span>
                        </button>
                    </div>
                </div>
                <hr></hr>
            </div>)
            })
    return(
        <div>
		    {productList}
	    </div>
    )

}

export default Product;