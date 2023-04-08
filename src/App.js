import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import { Routes, Route } from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<Products/>} />
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/cart/:id' element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;

