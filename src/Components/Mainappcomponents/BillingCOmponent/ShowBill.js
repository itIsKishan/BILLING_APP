import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../../Action/ProductAction'

const ShowBill = (props) =>{
    const {handleTog} = props
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(listProduct())
    },[])

    const handleCancel = () =>{
        handleTog()
    }
    const bill = useSelector((store)=>{
        return store.bill
    })
    const product = useSelector((store) =>{
        return store.product
    })

    
    const searchProduct = (id) =>{
        console.log('product',product)
        console.log('id',id)
        let result = product.find((ele) =>{
            return ele._id === id
        })
        result = result.name
        return result
    }

    return(
        <div>
            {
                bill.length === 0?(
                    <div>
                        <h3 className = 'fs-3 fw-lighter'>Generate Bill</h3>
                    </div>
                ) : (
                    <div className = 'card text-dark bg-light mb-3' style = {{width : 450}} >
                        <h1 className = 'fs-3 fw-lighter'>BILL INFO</h1>
                        {
                            bill.map((ele,i) =>{
                                return(
                                    <div>
                                        <h2 className = 'fs-3 fw-light'>Date - {ele.date.slice(0,10)}</h2>
                                        <h2 className = 'fs-3 fw-light'>Bill Id - {ele._id}</h2>
                                        <table className = 'table table-bordered border-dark' style = {{width : 400}}>
                                            <thead>
                                                <tr>
                                                    <th>SL No</th>
                                                    <th>Product Name</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr key = {i}>
                                                    <td>{ i + 1 }</td>
                                                    <td>{searchProduct(ele.lineItems[0].product)}</td>
                                                    <td>{ele.lineItems[0].quantity}</td>
                                                    <td>{ele.lineItems[0].price}</td>
                                                    <td>{ele.total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className = 'btn btn-primary' onClick = {handleCancel}>Cancel Bill</button>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                )
            }
        </div>
    )
}
export default ShowBill