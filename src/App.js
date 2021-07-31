import './App.css';
import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  )
}

export default App;
