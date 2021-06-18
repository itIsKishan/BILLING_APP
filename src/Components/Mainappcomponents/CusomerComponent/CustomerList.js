import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer, listCustomer } from '../../../Action/CustomerAction'
import SearchCustomer from './SearchCustomer'
import swal from 'sweetalert'
const CustomerList = (props) =>{
    const [edit,setEdit] = useState('')
    const [handleOver,setHandleOver] = useState(false)
    const dispatch = useDispatch()

    // dispatch an action
    useEffect(()=>{
        dispatch(listCustomer())
    },[])

    // fetch the cutomer data in state
    const customerData = useSelector((state) =>{
        return state.customer
    }) 

    // event handler to delte the customer
    const handleDelete = (name,id) =>{
        swal({
            title : 'CONFIRM DELETE',
            text : `Are you Sure You Want TO Delete ${name}`,
            buttons : true
        })
        .then((verify) =>{
            if(verify){
                dispatch(deleteCustomer(id))
            } 

        })
    }

    // it renders the list of the customer with functionality like delete and edit
    return(
        <div>
            {
                customerData.length === 0?(
                <div>
                    <h3 className = 'fw-lighter'>No Customer Found,Add A Customer To View</h3>
                </div>
                ):(
                    <div>

                        <SearchCustomer/><br/><br/>
                        <table className = 'table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerData.map((ele,i)=>{
                                        return(
                                            <tr key = {i}>
                                                <td>{ele.name}</td>
                                                <td>{ele.mobile}</td>
                                                <td>{ele.email}</td>
                                                <td><button className = "btn btn-danger" onClick = {()=>{handleDelete(ele.name,ele._id)}}>Delete</button></td>
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
export default CustomerList