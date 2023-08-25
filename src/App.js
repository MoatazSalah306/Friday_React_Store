import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/AppNavbar';
import {Routes ,Route} from "react-router-dom"
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path='/' element={<><Home/><Products/></>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
