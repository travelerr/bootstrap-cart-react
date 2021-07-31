import {useState} from 'react';
import Product from './Product.js';
import {Link} from 'react-router-dom'

function Cart()  {

  const productData = {
        products:[
        {
            id: 11,
            price: 25,
            quantity: 0, 
            inCart: true
        },
        {
            id: 22,
            price: 25,
            quantity: 0,
            inCart: true
        }
    ]
}

const [data, setQuantity] = useState(productData);
const [cartTotal, setCartTotal] = useState(0);
const [showProduct] = useState(true)

const inputHandler = (event, index) => {
    const target = event.target;
    setQuantity(prev => ({
        ...prev,
        products: prev.products.map((item, id) => {
            if(id === index){
                return{...item, quantity: target.value}
            }
            return item;
            })
        }
    ))
}

const removeItem = (dataId) => {
    setQuantity(prev => ({
        ...prev,
        products: prev.products.map((item, id) => {
            if(dataId === item.id ){
                return{...item, quantity: 0, inCart: false}
            }
            return item;
            })
        }
    ))  
}

const updateCartTotal = () => {
    var result = data.products.map(x => x.quantity * x.price)
    var sum = result.reduce((a, b) => a + b, 0)
    setCartTotal(sum)
  }

return (
<div className="App">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

    <div className="container">
	    <div className="row">
		<div className="col-xs-8">
			<div className="panel panel-info">
				<div className="panel-heading">
					<div className="panel-title">
						<div className="row">
							<div className="col-xs-6">
								<h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
							</div>
							<div className="col-xs-6">
								<button type="button" className="btn btn-primary btn-sm btn-block">
									<span className="glyphicon glyphicon-share-alt"></span> Continue shopping
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-body">
                    
                    <Product 
                    inputHandler={inputHandler} 
                    removeItem={removeItem} 
                    showProduct={showProduct}
                    data={data}/> 
                    
					<div className="row">
						<div className="text-center">
							<div className="col-xs-9">
								<h6 className="text-right">Added items?</h6>
							</div>
							<div className="col-xs-3">
								<button type="button" className="btn btn-default btn-sm btn-block" onClick={updateCartTotal} >
									Update cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-footer">
					<div className="row text-center">
						<div className="col-xs-9">
							<h4 className="text-right">Total <strong>{cartTotal}</strong></h4>
						</div>
						<div className="col-xs-3">
                        <Link  style={{color:"white"}} total={cartTotal}
                        to={{
                            pathname: "/checkout",
                            state: {
                                cartTotal: cartTotal
                            },
                          }} >
							<button type="button" className="btn btn-success btn-block">
								Checkout
							</button>
                         </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	    </div>
    </div>
</div>
);
}

export default Cart;