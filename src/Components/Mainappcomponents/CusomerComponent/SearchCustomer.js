import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'

const SearchCustomer = (props) =>{
    
    const [search, setSearch] = useState('')
    
    // event handler to set state value 
    const handleSearchChange = (e) =>{
        setSearch(e.target.value)
    }

    // fetch the customer data from the store
    const searchData = useSelector((store) =>{
        return store.customer
    })

    // event handler to submit the search query 
    const handleSearchSubmit = (e) =>{

        e.preventDefault()

        // find the cutomer info in the fetched data
        const data = searchData.find((customer) =>{
            return customer.name === search
        })

        // upon condition show ui
        const verifydata = data?true:false
        if(verifydata){
            swal({
                title : 'CUSTOMER INFO',
                text : `Name - "${data.name}",\n Email - "${data.email}",\n Mobile - "${data.mobile}"`
            })
            setSearch('')
        } else{
            swal({
                title : 'Not Found!',
                text : `customer ${search} not found in the list`,
                icon : 'warning'
            })
            setSearch('')
        }
    }
    // it renders the search bar
    return(
        <div>
            <form onSubmit = {handleSearchSubmit}>
            <div class="input-group flex-nowrap">
                <input type = 'text' className = 'form-control' style = {{width : 800}}  placeholder = 'Search A Customer By Name...' aria-describedby="addon-wrapping" value = {search} onChange = {handleSearchChange}/>
                <input type = 'submit' className=" btn btn-primary input-group-text" id="addon-wrapping"  value = 'Search' />
            </div>
            </form>
        </div>
    )
}
export default SearchCustomer