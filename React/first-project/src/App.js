import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Products, { initialProducts } from './Products';
import Cart from './Cart';
import {BrowserRouter as Router,  Switch,  Route,} 
  from "react-router-dom";


const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(initialProducts)
  const [idProd, setIdProd] = useState(7);
  const [amountAll, setAmountAll] = useState(0);
  const includesId = (array, item) => {
    return array.map(element =>
      element.id === item.id).includes(true);
  };

  const addProduct = (item) => {
    setIdProd(idProd + 1);
    setProducts([...products, { id: idProd, ...item }])
  }

  const incrAmount = (array, item) => {
    array.forEach(
      e => {
        if (e.id === item.id) {
          e.amount = e.amount + 1;
        };
      });
    return array;
  };

  const addItem = (item) => {
    let array = [...cartProducts];
    if (includesId(array, item)) {
      setCartProducts([...incrAmount([...cartProducts], item)]);
    } else {
      setCartProducts([...cartProducts, { ...item, amount: 1 }]);
    }
    setAmountAll(amountAll+1);
  }

  const removeItem = (item) => {
    setAmountAll(amountAll-item.amount);
    let index;
    cartProducts.forEach((el, ind) => {
      if (el.id === item.id) {
        index = ind;
      }
    });
    let tempCartProducts = [...cartProducts];
    tempCartProducts.splice(index, 1)
    setCartProducts(tempCartProducts);
  }

  return (
      <Router>
      <Header amountAll={amountAll}/>
        <Switch>
          <Route exact path={["/",'/addProduct']}>
          <Products addProduct={addProduct} products={products} addItem={addItem}></Products>
          </Route>
          <Route path="/cart">
          <Cart removeItem={removeItem} products={cartProducts}></Cart>
          </Route>
          <Route path="/*">404</Route>
        </Switch>
      </Router>
    // </div>
  );
}

export default App;