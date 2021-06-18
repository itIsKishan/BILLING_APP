import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../Action/UserAuthActions'

const LoginComponent = (props) =>{
    // destrcturing the property and using state for several opertion, L - login, E - error, F- focus
    const { difUi } = props
    const [ Lemail, setLemail] = useState('')
    const [ Lpassword, setLpassword] = useState('')
    const [ Eemail, setEemail ] = useState('')
    const [ Epassword, setEpassword] = useState('')
    const [ Femail, setFemail ] = useState(true)
    const [ Fpassword, setFpassword ] = useState(true)

    // dispatch function to dispatch an action
    const dispatch = useDispatch()

    // event handler to set the state value
    const handleLoginChange = (e) =>{
        const result = e.target.name
        if(result === 'email'){
            setLemail(e.target.value)
        } else if(result === 'password') {
            setLpassword(e.target.value)
        }
    }
    
    const handleFocusLemailChange = () =>{
        setFemail(!Femail)
    }
    const handleFocusLpasswordChange = () =>{
        setFpassword(!Fpassword)
    }

    // event handler to handle the form submittion
    const handleSubmit = (e) =>{
        e.preventDefault()
        if( Lemail === '' && Lpassword === ''){
            setEemail('Enter Email To Proceed')
            setEpassword('Password cannot be blank')
        } else if ( Lemail === ''){
            setEemail('Enter Email To Proceed')
        } else if( Lpassword === ''){
            setEpassword('Password cannot be blank')
        } else{
            const data = {
                email : Lemail,
                password : Lpassword
            }
            dispatch(loginUser(data,difUi))
        }
        setLemail('')
        setLpassword('')
    }
    // it renders the login form and have a route to register 
    return(
        <div className = 'd-flex align-item-center justify-content-center'>

        <div className ="shadow p-3 mb-5 bg-body rounded" style = {{width : 450, height : 350}}>

            
            <p >Login To Use App</p>
            
            <form onSubmit = {handleSubmit} >
                <div  className ="form-floating mb-3">
                    <input type = 'email' className ="form-control" id="floatingInput" name = "email" placeholder = 'Enter Email' onFocus = {handleFocusLemailChange} value = {Lemail} onChange = {handleLoginChange}/>{Femail && <span>{Eemail}</span>}<br/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className ="form-floating">
                    <input type = 'password' className="form-control" id="floatingPassword" name = "password" placeholder = 'Enter Password' onFocus = {handleFocusLpasswordChange} value = {Lpassword} onChange = {handleLoginChange}/>{Fpassword && <span>{Epassword}</span>}
                    <label for="floatingPassword">Password</label>
                </div><br/>
                
                <input className="btn btn-primary" type = 'submit' value = 'login'/><br/><br/>
                <b>Don't have an account? <Link to = '/register'>Register</Link> To Continue</b>
            </form>
            
        </div>
        </div>
    )
}
export default LoginComponent
