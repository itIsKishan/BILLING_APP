import axios from 'axios'
import swal from 'sweetalert'

export const aCust = (data) =>{
    return{
        type : 'ADD_CUSTOMER',
        payload : data
    }
}

export const lCustomer = (ldata) =>{
    return{
        type: 'LIST_CUSTOMER',
        payload : ldata
    }
}

export const dCustomer = (dData) =>{
    return{
        type : 'DELETE_CUSTOMER',
        payload : dData
    }
}

export const singCustomer = (sData) =>{
    return {
        type :'SINGLE_CUSTOMER',
        payload : sData
    }
}
export const addCustomer = (custData) =>{
    return (dispatch) => {
        axios.post('https://dct-billing-app.herokuapp.com/api/customers',custData,{
            "headers" : {
                "Authorization"  : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.message}`,
                    icon : 'Warning'
                })
            } else {
                // console.log(result)
                swal({
                    title : `successfully added ${result.name}`,
                    icon : 'success'
                })
                dispatch(aCust(result))
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const listCustomer = () =>{
    return (dispatch) =>{
        axios.get('https://dct-billing-app.herokuapp.com/api/customers',{
            "headers":{
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            dispatch(lCustomer(res.data))
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }
}

export const deleteCustomer = (id) =>{
    return (dispatch) =>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            "headers" : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            const msg = res.data.message?true:false
            if(msg){
                alert(res.data.message)
            } else{
                console.log('delete info',res.data)
                dispatch(dCustomer(res.data))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

// geting a single customer
export const singleCustomer = (id) =>{
    return (dispatch) =>{
        axios.get(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                // console.log('single user',result)
                dispatch(singCustomer(result))
            }
        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}