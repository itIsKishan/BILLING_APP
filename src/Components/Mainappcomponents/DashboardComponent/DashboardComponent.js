import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listCustomer } from '../../../Action/CustomerAction'
import { listProduct } from '../../../Action/ProductAction'
const DashboardComponent = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listCustomer())
        dispatch(listProduct())
    },[])
    const customerData = useSelector((store) => {
        return store.customer
    })
    const productsData = useSelector((store) =>{
        return store.product
    })
    return(
        <div className = 'd-flex align-item-center justify-content-center'>
        <div className = 'row-mb-3'>

        <div className="card text-dark bg-light mb-3" style={{width : 450}}>
            <div class="card-header">Total Customer</div>
            <div className = 'card-body'>
                <h2>{customerData.length}</h2>
            </div>
        </div>
        <div className="card text-dark bg-light mb-3" style={{width : 450}}>
        <div class="card-header">Total Products</div>
        <div className = 'card-body'>
            <h2>{productsData.length}</h2>
        </div>
        </div>
        </div>
        </div>
    )
}
export default DashboardComponent