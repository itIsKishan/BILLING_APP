import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Action/ProductAction'
const ProductForm = (props) =>{
    const [pName, setPname] = useState('')
    const [pPrice, setPprice] = useState('')
    const [Ename, setEname] = useState('')
    const [Eprice, setEprice] = useState('')
    const [Fname, setFname] = useState(true)
    const [Fprice, setFprice] = useState(true)
    const dispatch = useDispatch()
    const handleProductNameChange = (e) =>{
        setPname(e.target.value)
    }
    const handleProductPriceChange = (e) =>{
        setPprice(e.target.value)
    } 
    const handleProNameFocusChange = () =>{
        setFname(!Fname)
    }
    const handleProPriceFocusChange = () =>{
        setFprice(!Fprice)
    }
    const handleProductSubmit = (e) =>{
        e.preventDefault()
        if(pName === '' && pPrice === ''){
            setEname('Product Name Should Be entered')
            setEprice('Price should Be Entered')
        } else if (pName ===  ''){
            setEname('Product Name Should Be entered')
        } else if(pPrice === ''){
            setEprice('Price should Be Entered')
        } else{
            const addProductData = {
                name : pName,
                price : pPrice
            }
            dispatch(addProduct(addProductData))
            
            setPname('')
            setPprice('')
        }
    }
    return(
        <div>
            <div className = 'd-flex align-item-center justify-content-center '>
                <div className ="shadow p-3 mb-5 bg-body rounded" style = {{width : 450, height : 250}}>

                <h1 className = 'fw-lighter'>Add Product</h1>
                <form onSubmit = {handleProductSubmit}>
                    <input type = 'text' className = 'form-control' placeholder = 'Product Name' onFocus = {handleProNameFocusChange} value = {pName} onChange = {handleProductNameChange}/>{Fname && <span>{Ename}</span>}<br/>
                    <input type = 'text' className = 'form-control' placeholder = 'Price' onFocus = {handleProPriceFocusChange} value = {pPrice} onChange = {handleProductPriceChange} />{Fprice && <span>{Eprice}</span>}<br/>
                    <input type = 'submit' className = 'btn btn-primary' value = 'Add Product' />
                </form>
                </div>
            </div>
        </div>
    )
}
export default ProductForm