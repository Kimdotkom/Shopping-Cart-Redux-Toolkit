import React from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import { add } from '../store/cartSlice'
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const {data: productCart} = useSelector(state=> state.cart)


  const error = () => toast.error("This Item already added to the Cart.");

  const success = () => toast.success("Product added successfully !");

  const addToCart = (product) => {
    let result = productCart.every(obj => {
     return  obj.id !== product.id 
     })
     result?
     dispatch(add(product))
     && success()
     :
       error()
   }

  return (
    <div  className='col-sm-3' style={{marginBottom: "10px"}}>
      <ToastContainer />
      <Card  className="h-100" >
        <div >
        <Card.Img variant="top" src={product.image} style={{width: "100px", height: "130px"}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text><h5>$ {product.price}</h5></Card.Text>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <ReactStars count={5} size={24}  color2={'#ffd700'} value={product.rating.rate} edit={false} />
          <p style={{color: 'grey'}}>({product.rating.count})</p>
          </div>
        </Card.Body>

        <Card.Footer style={{background: 'white'}}>
        <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart <AiOutlineShoppingCart /></Button>
        </Card.Footer>

      </Card>
    </div>
  )
}

export default ProductCard