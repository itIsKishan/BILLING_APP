import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'

const SearchProduct = (props) =>{
    const [searchPro, setSearchpro] = useState('')
    const productsData = useSelector((store) =>{
        return store.product
    })
    const handleSearchProductChange = (e) => {
        setSearchpro(e.target.value)
    }
    const handleSearchSubmit = (e) =>{
        e.preventDefault()
        const findProduct = productsData.find((prod) => {
            return prod.name.toLowerCase() === searchPro.toLowerCase()
        })
        const verifyFindedProduct = findProduct ? true : false
        if(verifyFindedProduct){
            setSearchpro('')
            swal({
                title : 'PRODUCT INFO',
                text : `\n Name - "${findProduct.name},\n Price - "${findProduct.price}`
            })
        } else {
            swal({
                title : 'Search Error',
                text : `Product "${searchPro}" not found`,
                icon : 'warning'
            })
            setSearchpro('')
        }
    }
    return(
        <div>
            <form onSubmit = {handleSearchSubmit}>
                <div class="input-group flex-nowrap">
                    <input className = 'form-control' type = 'text' aria-describedby="addon-wrapping" placeholder = 'Search Product' value = {searchPro} onChange = {handleSearchProductChange}/>
                    <input className = 'btn btn-primary input-group-text' id="addon-wrapping" type = 'submit' value = 'Search' />
                </div>
            </form>
        </div>
    )
}
export default SearchProduct