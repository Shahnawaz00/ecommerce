import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Ccarousel from './components/Ccarousel';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {

  // Category state 
  const [categoryChosen, setcategoryChosen] = useState('');
  const categoryHandler = (category) => {
    setcategoryChosen(category);
  };

  // product state 
 const [productChosen, setproductChosen] = useState(0);
 const productHandler = (product) => {
   setproductChosen(product);
 };

//  cart state 
const [cartArray, setcartArray] = useState([]);
const cartHandler = (product) => {
  setcartArray((prevArr) => [...prevArr, product]);
};
const deleteProduct = (id) => {
  setcartArray(cartArray.filter((product) =>  product.id !== id ))
}


  return (
    <div className="App">
      <Header/>
      <Categories categoryHandler={categoryHandler} />
      <Search productHandler={productHandler} />
      <Routes>
        <Route path='/cart' element={<Cart cartArray={cartArray} deleteProduct={deleteProduct}  />} />
        <Route path='/products/product' element={<Product productChosen={productChosen} cartHandler={cartHandler}   />} />
        <Route path='/products' element={<Products productHandler={productHandler} categoryChosen={categoryChosen} />} />
        <Route path='/' element={<Ccarousel/>} />
      </Routes>
    </div>
  );
}

export default App;
