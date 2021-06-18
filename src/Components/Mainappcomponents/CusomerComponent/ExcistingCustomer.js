import React from 'react'
import CustomerList from './CustomerList'

const ExistingCustomer = (props) =>{
    return(
        <div>
            <h3 className = 'fw-light' >Excisting Customer</h3>
            <CustomerList/>
        </div>
    )
} 
export default ExistingCustomer