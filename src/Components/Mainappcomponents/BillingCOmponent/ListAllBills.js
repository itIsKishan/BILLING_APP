import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import { deleteBill, listAllBills } from '../../../Action/BillAction'

const ListAllBills = (props) =>{
    const dispatch = useDispatch()
    const [tog, setTog] = useState(false)
    const handleBillList = () =>{
        setTog(!tog)
        dispatch(listAllBills())
    }
    
    const bills = useSelector((store) =>{
        return store.bill
    })
    const product = useSelector((store) =>{
        return store.product
    })
    const searchProductName = (id) =>{
        let result = product.find((ele) =>{
            return ele._id === id
        })
        result = result.name
        return result
    }
    const handleShow = (ele) =>{
        swal({
            title : 'BILL INFO',
            text : `BILL ID - "${ele._id}",\n PRODUCT NAME - "${searchProductName(ele.lineItems[0].product)}",\n QUANTITY - "${ele.lineItems[0].quantity}",\n PRICE - "${ele.lineItems[0].price}",\n TOTAL - "${ele.total}"`,
            icon : 'success'
        })
    }
    const handleDelete = (id) =>{
        swal({
            title :'CONFIRM DELETE',
            text : 'Are you sure you want to delete',
            icon : 'warning'
        })
        .then((verifyDelete)=>{
            if(verifyDelete){
                dispatch(deleteBill(id))
            }
        })
    }
    return (
        <div>
            <button className = 'btn btn-primary' onClick = {handleBillList}>List All Bills</button>
            {
                tog ? (
                    <div>
                        <table className = 'table table-striped' >
                            <thead>
                                <tr>
                                    <th>SL No</th>
                                    <th>Date</th>
                                    <th>Bill Id</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Show</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bills.map((ele,i) =>{
                                        return (
                                            <tr key = {i}>
                                                <td>{i + 1}</td>
                                                <td>{ele.date.slice(0,10)}</td>
                                                <td>{ele._id}</td>
                                                <td>{searchProductName(ele.lineItems[0].product)}</td>
                                                <td>{ele.lineItems[0].quantity}</td>
                                                <td>{ele.lineItems[0].price}</td>
                                                <td>{ele.total}</td>
                                                <td><button className = 'btn btn-info' onClick = {() =>{handleShow(ele)}} >Show</button></td>
                                                <td><button className = 'btn btn-danger' onClick = {() =>{handleDelete(ele._id)}}>Remove</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}
export default ListAllBills