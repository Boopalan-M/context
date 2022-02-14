// import React, { useState } from "react";

// export const cartItemsContext = React.createContext();

// export default function UserProvider({ children }) {
// //  function UserProvider ({ children }) {

//     const [cartItems, setCartItems] = useState([]);

//     const onAdd = (product) => {
//         console.log(product,cartItems,"CHECKING PRODUCT AND CARTITEMSS")
//             const exist = cartItems?.find( (x) => x.id === product.id);
//             console.log(exist, "Checking exist")
//             if (exist) {
//               setCartItems(
//                 cartItems.map((x) => (

//                   x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//                 )));
//             } else {
//               console.log("xxxxxx", { ...product, qty: 1 })
//               setCartItems([...cartItems, {... product, qty: 1 }])
//             };
//           }

//     return (
//       <cartItemsContext.Provider value={{ onAdd,cartItems }}>
//         {children}
//       </cartItemsContext.Provider>
//     );
// };



import React, { useState, createContext } from "react";
import data from "../../data";
export const cartContext = createContext();
export const CartItemsContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const { prodcts } = data;
  const onAdd = (product) => {
    console.log(product, cartItems, "CHECKING PRODUCT AND CARTITEMSS")
    const exist = cartItems?.find((x) => x.id === product.id);
    console.log(exist, "Checking exist")
    if (exist) {
      setCartItems(
        cartItems.map((x) => (

          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )));
    } else {
      console.log("xxxxxx", { ...product, qty: 1 })
      setCartItems([...cartItems, { ...product, qty: 1 }])
    };
  }

  return (

    <cartContext.Provider value={{cartItems:cartItems,prodcts:prodcts,onAdd:onAdd}}>
      {console.log(cartItems,prodcts,onAdd,"CHECKING CARTITEMSS")}
{props.children}
    </cartContext.Provider>

  );
}