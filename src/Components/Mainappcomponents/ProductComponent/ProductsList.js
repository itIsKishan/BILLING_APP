import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import swal from 'sweetalert'
import { deleteProduct, listProduct } from '../../../Action/ProductAction'
import EditProduct from './ProductEdit'
import SearchProduct from './SearchProducts'
import { Link, Route } from 'react-router-dom'

const ProductsList = (props) =>{
    // dispatch function
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(listProduct())
    },[])

    //  fetching the data from the store
    const allProducts = useSelector((store) =>{
        return store.product
    })

    // event handler to handle the product deletion
    const handleProductDelete = (name,id) =>{
        swal({
            title : 'CONFIRM DELETE',
            text : `Do You want to delete the product ${name}`,
            icon : 'warning',
            buttons : true
        })
        .then((verifyDelete) =>{
            if(verifyDelete){
                dispatch(deleteProduct(id))
            }
        })
    }
    return(
        <div>
            {
                allProducts.length === 0?(
                    <div>
                        <h3 className = 'fw-lighter'>No Product found,Add Products To view</h3>
                    </div>
                ):(
                    <div>
                        <br/>
                        <h1 className = 'fw-lighter' >Existing Products</h1>
                        <SearchProduct/><br/><br/>
                        <table className = 'table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProducts.map((ele,i) =>{
                                        return(
                                            <tr key = {i}>
                                                <td>{ele.name}</td>
                                                <td>{ele.price}</td>
                                                <td><button className = 'btn btn-danger' onClick = {() =>{handleProductDelete(ele.name,ele._id)}}>Delete</button></td>
                                                <Route path = '/products/edit' component = {EditProduct} exact = {true}/>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}
export default ProductsList