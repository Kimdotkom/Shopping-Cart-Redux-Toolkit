import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { addQty, minusQty, remove } from '../store/cartSlice'
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

const Cart = () => {
    const dispatch = useDispatch()

    const {data: productList, totalPrice} = useSelector(state=> state.cart)

    const removeFromCart = (id) => {
        dispatch(remove(id))
    }
    
    const qtyPlus = (id) => {
      dispatch(addQty(id))
    }
    
    const qtyMinus = (id) => {
      dispatch(minusQty(id))
    }

    const cards = productList.map((product)=> 
        <div className='col-md-12' style={{marginBottom: "10px"}}  key={product.id} >
        <Card className="h-100" >
          <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width: "100px", height: "130px"}} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>


            <AiFillPlusCircle size={'23px'} onClick={()=> qtyPlus(product)} />
            <AiFillMinusCircle size={'23px'} onClick={()=> qtyMinus(product)} />
            <Card.Text>Qty: {product.qty}</Card.Text>
          </Card.Body>
  
          <Card.Footer style={{background: 'white'}}>
          <Button variant="danger" onClick={()=> removeFromCart(product)}>Remove Item</Button>
          </Card.Footer>
  
        </Card>
      </div>)
      
      
  return (
    <div className='row'>
    
          { 
          productList.length === 0 ?
          <div  style={{textAlign: 'center', marginTop: '20%'}}><p>No data</p></div>
          : <div>
          <h2>Total price : ${totalPrice.toFixed(2)}</h2>
            {cards}
            </div>
         }
    </div>
  )
}

export default Cart