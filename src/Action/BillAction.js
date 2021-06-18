import axios from 'axios'
import swal from 'sweetalert'

export const creBill = (BillData) =>{
    return {
        type : 'CREATE_BILL',
        payload : BillData
    }
}

export const lisBill = (AllBills) =>{
    return {
        type : 'ALL_BILLS',
        payload : AllBills
    }
}

export const dilBill = (Bill) =>{
    return{
        type : 'DELETE_BILL',
        payload : Bill
    }
}
// create a bill
export const createBill = (Bill) =>{
    return (dispatch) => {
        axios.post('https://dct-billing-app.herokuapp.com/api/bills',Bill,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            console.log('bill details',res.data)
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                swal({
                    title : 'Successfully generated a bill',
                    icon : 'success'
                })
                dispatch(creBill(result))
            }
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }
}

// list all bills
export const listAllBills = () =>{
    return (dispatch) =>{
        axios.get('https://dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            console.log('all bills', res.data)
            dispatch(lisBill(res.data))
        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}

// delete a bill
export const deleteBill = (id) =>{
    return (dispatch) =>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            console.log('delete',res.data)
            dispatch(dilBill(res.data))
        })
        .catch((err) =>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}

export const singleBill = (sBillId) =>{
    console.log(sBillId)
    return (dispatch) =>{
        axios.get(`https://dct-billing-app.herokuapp.com/api/bills/${sBillId}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) =>{
            console.log(res.data,'single bill')
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }
}