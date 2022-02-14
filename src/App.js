import logo from './logo.svg';
import React, { useState,useContext } from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import {CartItemsContextProvider} from "./components/context/cartContext";
function App() {


  
//   const [cartItems, setCartItems] = useState([]);

//   const onAdd = (product) => {
// console.log(product,cartItems,"CHECKING PRODUCT AND CARTITEMSS")
//     const exist = cartItems?.find( (x) => x.id === product.id);
//     console.log(exist, "Checking exist")
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) => (

//           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//         )));
//     } else {
//       console.log("xxxxxx", { ...product, qty: 1 })
//       setCartItems([...cartItems, {... product, qty: 1 }])
//     };
//   }



 // console.log(prodcts, data, cartItems, "Checking in Productss")
  return (
    <CartItemsContextProvider >
    <div className="App">



      Samplee

      <Router>
        <Switch>
          <Route path="/Header" component={Header}/>
          <Route path="/Home" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
      <Header />
      <Home  />
      <Cart  />
      </div>
      </CartItemsContextProvider>
  );
}

export default App;








// const onAdd = (product) => {
//  const exist = cartItems.find( (x) => x.id === product.id);
//  if (exist) (
//     setCartItems (
//      cartItems.map( (x) =>
//       x. id === product.id ? { ...exist, qty: exist.qty + 1 ) : x
//    );
//    } else (
//    setCartItems ([...cartItems, { ...product, qty: 1 }});
// };