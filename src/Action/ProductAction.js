import axios from 'axios'
import swal from 'sweetalert'

export const aProduct = (addData) =>{
    return{
        type : 'ADD_PRODUCT',
        payload : addData
    }
}

export const lProduct = (listData) => {
    return {
        type : 'LIST_PRODUCT',
        payload : listData
    }
}

export const dProduct = (deleteProduct) =>{
    return {
        type : 'DELETE_PRODUCT',
        payload : deleteProduct
    }
}
export const addProduct = (addProductData) =>{
    return (dispatch) =>{
        axios.post('https://dct-billing-app.herokuapp.com/api/products',addProductData,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            const responseData = res.data
            if(responseData.hasOwnProperty('errors')){
                swal({
                    title : `${responseData.message}`
                })
            } else {
                swal({
                    title : `successfully added the product ${responseData.name} `,
                    icon : 'success'
                })
                dispatch(aProduct(responseData))
            }
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const listProduct = () =>{
    return (dispatch) =>{
        axios.get('https://dct-billing-app.herokuapp.com/api/products',{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            dispatch(lProduct(res.data))
        })
        .catch((err) =>{
            alert(err.message)
        })
    }
}

export const deleteProduct = (id) =>{
    return (dispatch) =>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            dispatch(dProduct(res.data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}