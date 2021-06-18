import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../../../Action/CustomerAction'


const CustomerForm = (props) =>{
    const dispatch = useDispatch()
    // c-customer
    const [Cname, setCname] = useState('')
    const [CphoneNumber, setCphonenumber] = useState('')
    const [Cemail, setCemail] = useState('')
    // e - error
    const [Ename, setEname] = useState('')
    const [Eemail, setEemail] = useState('')
    const [Emobile, setEmobile] = useState('')
    // f - focus
    const [Fname, setFname] = useState(true)
    const [Femail,setFemail] = useState(true)
    const [Fmobile, setFmobile] = useState(true)
    // onchange eventhandler
    const handleCemailChange = (e) =>{
        setCemail(e.target.value)
    }
    const handleCnameChange = (e) =>{
        setCname(e.target.value)
    }
    const handleCphonenumberChange = (e) =>{
        setCphonenumber(e.target.value)
    }
    // onfocus eventhandler
    const handleNameFocusChange = () =>{
        setFname(!Fname)
    }
    const handleEmailFocusChange = () =>{
        setFemail(!Femail)
    }
    const handleMobileFocusChange = () =>{
        setFmobile(!Fmobile)
    }
    // submit eventhandler
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(Cname === '' && Cemail === '' && CphoneNumber === ''){
            setEname('Name should be entered')
            setEemail('Email can\'t be blank')
            setEmobile('Please enter Phone number')
        } else if(Cname === ''){
            setEname('Name should be entered')
        } else if(Cemail === ''){
            setEemail('Email can\'t be blank')
        } else if(CphoneNumber === ''){
            setEmobile('Please enter Phone number')
        } else{
            const customerData = {
                name : Cname,
                mobile : CphoneNumber,
                email : Cemail
            }
            dispatch(addCustomer(customerData))
            
            setCemail('')
            setCname('')
            setCphonenumber('')
        }
    }
    return(
        <div className = 'd-flex align-item-center justify-content-center '>
        <div className ="shadow p-3 mb-5 bg-body rounded" style = {{width : 450, height : 350}}>

            <p>Add Customer</p><br/>
            <form onSubmit = {handleSubmit}>
                <input type = 'text' className = 'form-control col-mb-4' placeholder = 'User Name' onFocus = {handleNameFocusChange} value = {Cname} onChange = {handleCnameChange}/><span>{Fname && Ename}</span><br/>
                <input type = 'text' className = 'form-control col-mb-4' placeholder = 'Phone Number' onFocus = {handleMobileFocusChange} value = {CphoneNumber} onChange = {handleCphonenumberChange}/><span>{Femail && Eemail}</span><br/>
                <input type = 'email'className = 'form-control col-mb-4' placeholder = 'Email' onFocus = {handleEmailFocusChange} value = {Cemail} onChange = {handleCemailChange}/><span>{Fmobile && Emobile}</span><br/>
                <input type = 'submit' className = 'btn btn-primary' value = 'Add Customer' />
            </form>
        </div>
        </div>
    )
}
export default CustomerForm