import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../Action/UserAuthActions'

// component for registring a user
const RegisterComponent = (props) =>{
    // R - Register
    const [ Rname, setRname ] = useState('')
    const [ Remail, setRemail ] = useState('')
    const [ Rpassword, setRpassword ] = useState('')
    const [ RbusinessName, setrbusinessname ] = useState('')
    const [ Raddress, setRaddress ] = useState('')
    // E - error
    const [ Ename, setEname ] = useState('')
    const [ Eemail, setEmail ] = useState('')
    const [ Epassword, setEpassword ] = useState('')
    const [ Eaddress, setEaddress ] = useState('')
    const [ Ebusinessname, setEbusinessname ] = useState('')
    // F-focus
    const [ Fname, setFname ] = useState(true)
    const [ Femail, setFemail ] = useState(true)
    const [ Fpassword, setFpassword ] = useState(true)
    const [ Faddress, setFaddress ] = useState(true)
    const [ Fbusinessname, setFbusinessname ] = useState(true)

    // dispatch function
    const dispatch = useDispatch()

    // event handler to handle the function to set the state
    const handleRegisterChange = (e) =>{
        const result = e.target.name
        if(result === 'name'){
            setRname(e.target.value)
        } else if(result === 'email'){
            setRemail(e.target.value)
        } else if(result === 'password'){
            setRpassword(e.target.value)
        } else if(result === 'address'){
            setRaddress(e.target.value)
        } else if(result === 'business'){
            setrbusinessname(e.target.value)
        }
    }
    
    // focus event handler to show error 
    const handleFocuspasswordchange = () =>{
        setFpassword(!Fpassword)
    }
    const handleFocusnameChange = () =>{
        setFname(!Fname)
    }
    const handleFocusemailChange = () =>{
        setFemail(!Femail)
    }
    const handleFocusaddressChange = () =>{
        setFaddress(!Faddress)
    }
    const handleFocusbusinesNameChange = () =>{
        setFbusinessname(!Fbusinessname)
    }

    // form submit event handler
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(Rname === '' && Remail === '' && Raddress === '' && RbusinessName === '' && Rpassword === ''){
            setEname('Name Is Required For Identification')
            setEmail('Email Should Be Entered To Make Connection strong')
            setEaddress('Address Cannot Be Blank')
            setEbusinessname('Business Name Should Be Filled')
            setEpassword('Password Must Be Set For Security Purpose')
            
        } else if(Rname === ''){
            setEmail('Email Should Be Entered To Make Connection strong')
        } else if(Remail === ''){
            setEmail('Email Should Be Entered To Make Connection strong')
        } else if(Raddress === ''){
            setEaddress('Address Cannot Be Blank')
        } else if(Rpassword === ''){
            setEpassword('Password Must Be Set For Security Purpose')
        } else if(RbusinessName === ''){
            setEbusinessname('Business Name Should Be Filled')
        } else{
            const data = {
                username : Rname,
                email : Remail,
                password : Rpassword,
                address : Raddress,
                businessName : RbusinessName

            }
            dispatch(registerUser(data,props))
            setRname('')
            setRemail('')
            setRaddress('')
            setRpassword('')
            setrbusinessname('')
        }
    }
    return(
        <div className = 'd-flex align-item-center justify-content-center'>
        <div className ="shadow p-3 mb-5 bg-body rounded" style = {{width : 400, height : 500}}>


            <p>Register Now</p>
            <form onSubmit = {handleSubmit}>
            <div  className ="form-floating mb-2">
                <input type = 'text' className ="form-control" id="floatingInput" name = 'name' value = {Rname} onFocus = {handleFocusnameChange} onChange = {handleRegisterChange}/>{Fname && <span>{Ename}</span>}
                <label for="floatingInput">Name</label>
            </div>
            <div  className ="form-floating mb-2">
                <input type = 'email' className ="form-control" id="floatingEmail" name = 'email' value = {Remail} onFocus = {handleFocusemailChange} onChange = {handleRegisterChange}/>{Femail && <span>{Eemail}</span>}
                <label for="floatingEmail">Email</label>
            </div>
            <div  className ="form-floating mb-2">
                <input type = 'password' className ="form-control" id="floatingPassword" name = 'password'  onFocus = {handleFocuspasswordchange} value = {Rpassword} onChange = {handleRegisterChange}/>{Fpassword && <span>{Epassword}</span>}
                <label for="floatingPassword">Password</label>
            </div>
            <div  className ="form-floating mb-2">
                <input type = 'text' className ="form-control" id="floatingBusiness" name = 'business'   onFocus = {handleFocusbusinesNameChange} value = {RbusinessName} onChange = {handleRegisterChange}/>{Fbusinessname && <span>{Ebusinessname}</span>}
                <label for="floatingBusiness">Business</label>
            </div>
            <div  className ="form-floating mb-2">
                <textarea  name = 'address' className ="form-control" id="floatingAddress" placeholder = 'Add Address' value = {Raddress} onFocus = {handleFocusaddressChange} onChange = {handleRegisterChange}/>{Faddress && <span>{Eaddress}</span>}
                <label for="floatingAddress">Address</label>
            </div>
                <input className="btn btn-primary" type = 'submit' value = 'Register'/>
            </form><br/>
            <b>Already have an account? <Link to = '/login' >Login</Link> now</b>
        </div>
        </div>
    )
}
export default RegisterComponent