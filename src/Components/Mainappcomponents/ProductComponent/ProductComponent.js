import React from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'

const ProductComponent = (props) =>{
    return(
        <div>
            <ProductForm/>
            <ProductsList/>
        </div>
    )
}
export default ProductComponent