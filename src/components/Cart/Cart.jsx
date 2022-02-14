import React,{useContext} from 'react'
import { cartContext } from '../context/cartContext';
function Cart(props) {
    const {cartItems,onAdd} = useContext(cartContext);
    console.log(cartItems,"CCCCC")
   

    return (
      <>
        <div>Cart</div>
            <div>{cartItems?.length === 0 && <div > Cart Is Empty</div>}</div>
            
      </>

  )
}

export default Cart