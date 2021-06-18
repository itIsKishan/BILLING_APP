import React from 'react'
import CustomerForm from './CustomerForm'
import ExistingCustomer from './ExcistingCustomer'

// main component which render the other componet to show the view of customers
const CustomersComponent = (props) =>{
    return (
        <div>
            <CustomerForm/>
            <ExistingCustomer/>
        </div>
    )
}
export default CustomersComponent