import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../store/productSlice'
import { Alert, Form } from 'react-bootstrap'
import ProductCard from './ProductCard'

const Products = () => {

    const dispatch = useDispatch()

    const [inputSearch, setInputSearch] = useState('')

    const {data: productList, status} = useSelector((state)=> state.products)

    useEffect(() => {
        dispatch(getProducts())
    // axios.get('https://fakestoreapi.com/products')
    // //   .then(result=> setProductList(result.data))
        
    }, [dispatch]);

    if (status === 'Loading'){
            return <Alert>Loading...</Alert>
    }

    if (status === 'Error'){
        return <Alert variant='danger'>Something went wrong. Try again Later</Alert>
    }




  return (
    <div className='row'>
        <h1>My Store</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Form.Control style={{marginBottom:'5px', marginTop:'5px', width: '400px', height: '40px'}} placeholder='Search...' type='text' 
        onChange={(e)=> setInputSearch(e.target.value)} />
        </div>
        {
            productList
            .filter((el)=> el.title.toUpperCase().includes(inputSearch.toUpperCase().trim()))
            .map(product => <ProductCard product={product} key={product.id} />)
        }
     
    </div>
  )
}

export default Products