
import React,{useContext} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { cartContext } from "../context/cartContext";
function Home(props) {
    const {cartItems,onAdd,prodcts} = useContext(cartContext);

    console.log(prodcts,onAdd,"Checking propss")
    return (
      
      <div>



<main className="block col-2">
  <h2>Products</h2>
  <div className=" row">
                  {prodcts.map((product) => (
       <div>
       <img className="small" src={product.image} alt={product.name}/>
                          <h3>{product.name}</h3>
                          <div>${product.price}</div>
        <div>
           {/* <button  onclick={onAdd(product)}>Add To Cart</button> */}
           <button onClick={()=>onAdd(product)}>Add To Cart</button>
           {/* <button onClick={() => onAdd(product)}>Add To Cart</button> */}
        </div>
        </div>     
                      
                    //   < Product key={product.id} product={product}> </Product>
                  
                  ))}
 </div>
</main>
          
          <ButtonGroup variant="outlined" aria-label="outlined button group">




        <Button>-</Button>
        <Button>1</Button>
        <Button>+</Button>
      </ButtonGroup>
    </div>
  )
}

export default Home