import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBill } from '../../../Action/BillAction'
import { listCustomer } from '../../../Action/CustomerAction'
import { listProduct } from '../../../Action/ProductAction'
import ListAllBills from './ListAllBills'
import ShowBill from './ShowBill'

const BillForm = (props) =>{

    const [tog, setTog] = useState(true)
    const [date, setDate] = useState('')
    const [customer, setCustomer] = useState('')
    const [product, setProduct] = useState('')
    const [qnty, setQnty] = useState('')

    const handleTog = () =>{
        setTog(!tog)
    }
    const handleBillChange = (e) =>{
        const name = e.target.name
        if(name === 'date'){
            setDate(e.target.value)
        } else if(name === 'customer'){
            setCustomer(e.target.value)
        } else if (name === 'product'){
            setProduct(e.target.value)
        } else if(name === 'qnty'){
            setQnty(e.target.value)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const billData = {
            date : date,
            name : customer,
            lineItems : {
                product : product,
                quantity : qnty
            }
        }
        dispatch(createBill(billData))
        setDate('')
        setCustomer('')
        setProduct('')
        setQnty('')
    }
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(listCustomer())
        dispatch(listProduct())
    },[])
    const allStore = useSelector((store) =>{
        return store
    })

    return(
        <div>
            <div className = 'd-flex align-item-center justify-content-center '>

            <div className = 'shadow p-3 mb-5 bg-body rounded' style = {{width : 500}}>
            <form>
                <input className = 'form-control' type = 'date' value = {date} name = 'date' onChange = {handleBillChange}/><br/>
                <select className = 'form-select' value = {customer} name = 'customer' onChange = {handleBillChange}>
                    <option value = ''>customers</option>
                    {
                        allStore.customer.map((ele,i) =>{
                            return <option key = {i} value = {ele._id}>{ele.name}</option>
                        })
                    }
                </select><br/>
                <select className = 'form-select' value = {product} name = 'product' onChange = {handleBillChange}>
                    <option value = '' >products</option>
                    {
                        allStore.product.map((ele,i) =>{
                            return <option key = {i} value = {ele._id}>{ele.name}</option>
                        })
                    }
                </select><br/>
                <input className = 'form-control' type = 'number' value = {qnty} name = 'qnty' placeholder = 'Qnty' onChange = {handleBillChange}/><br/>
                <button className = 'btn btn-primary' onClick = {handleSubmit}>Generate Bill</button>
            </form><br/><br/>
            </div>
            </div>
            {
                tog ? (
                    <div>
                        <ShowBill handleTog = {handleTog}/>
                    </div>
                ) : (
                    <div>
                        <h1 className = 'fs-3 fw-lighter' >Generate Bill</h1>
                        <ListAllBills/>
                    </div>
                )
            }
        </div>
    )
}
export default BillForm