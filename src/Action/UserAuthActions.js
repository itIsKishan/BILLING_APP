import axios from 'axios'
import swal from 'sweetalert'


// action creator which logins a user to app
export const loginUser = (loginuserData,difUi) =>{
    return (dispatch) =>{
        axios.post('https://dct-billing-app.herokuapp.com/api/users/login',loginuserData)
        .then((res)=>{
            const result = res.data
            console.log('res',result)
            if(result.hasOwnProperty('error')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else{
                swal({
                    title : 'Successfully logged in',
                    icon : 'success'
                })
                localStorage.setItem('token',result.token)
                difUi()
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

// action creator to handle register
export const registerUser = (registerData,props) =>{
    return (dispatch) =>{
        axios.post('https://dct-billing-app.herokuapp.com/api/users/register',registerData)
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty('errors')){
                swal({
                    title : `${result.errors}`,
                    icon : 'error'
                })
            } else {
                swal({
                    title : 'successfully logged in, please login to use app',
                    icon : 'success'
                })
                props.history.push('/login')
            }
        })
        .catch((err)=>{
            swal({
                title : `${err.message}`,
                icon : 'error'
            })
        })
    }
}