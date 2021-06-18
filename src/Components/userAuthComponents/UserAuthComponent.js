// import the neccessary library and files in the app
import React,{ useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'
import swal from 'sweetalert'
import BillingComponent from '../Mainappcomponents/BillingCOmponent/BillCOmponent'
import CustomersComponent from '../Mainappcomponents/CusomerComponent/CustomerComponent'
import DashboardComponent from '../Mainappcomponents/DashboardComponent/DashboardComponent'
import ProductComponent from '../Mainappcomponents/ProductComponent/ProductComponent'
import ProfileComponent from '../Mainappcomponents/ProfileComponent/ProfileComponent'
import LoginComponent from './loginComponent'
import RegisterComponent from './registerComponent'

// main react component
const UserauthComponent = () =>{
    // using state to toggle between the app
    const [ pageUi, setPageUi ] = useState(false)
    const difUi = () =>{
        setPageUi(!pageUi)
    }
    // used to prevent reload problem
    useEffect(()=>{
        if(localStorage.getItem('token')){
            difUi()
        }
    },[])
    // handling logout with an alert message
    const handleLogout = () =>{
        swal({
            title : 'Log Out',
            text : 'Are You Sure, You Want To Logout',
            buttons : true
        })
        .then((result)=>{
            if (result){
                localStorage.removeItem('token')
                setPageUi(!pageUi)
            } 
        })
    }
    // this component renders the links upon the condition
    return(
        <div>
            {
                pageUi ? (
                    <div style = {{backgroundColor : "transparent"}}>
                        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <p className="nav-link"><Link to = '/dashboard'>Dashboard</Link></p>
                            <p className = 'nav-link'><Link to = '/customers'>Customers</Link></p>
                            <p className = 'nav-link'><Link to = '/products'>Products</Link></p>
                            <p className = 'nav-link'><Link to = '/billing'>Billing</Link></p>
                            <p className = 'nav-link'><Link to = '/profile'>Profile</Link></p>
                            <p className = 'nav-link'><Link to = '/home' onClick = {handleLogout}>Logout</Link></p>
                        </div>
                        </div>
                        </nav>

                        <Route path = '/profile' component = {ProfileComponent} exact = {true}/>
                        <Route path = '/dashboard' exact = {true} component = {DashboardComponent} />
                        <Route path = '/customers' exact = {true} component = {CustomersComponent} />
                        <Route path = '/products' exact = {true} component = {ProductComponent}/>
                        <Route path = '/billing' exact = {true} component = {BillingComponent} />
                    </div>
                ) : (
                    <div>
                        <h1 className = 'fw-normal'>BILLING APP</h1>
                        <div className = 'fw-light'>
                            <p className ="fs-4" >Maintain Every details of customers and products,
                            <button className ="btn btn-light btn-lrg"><Link to = '/login' >Login</Link></button> or <button class="btn btn-light btn-lrg" ><Link to = '/register' >Register</Link></button> to use App.
                            </p><br/>
                        </div>

                        <Route path = '/login'  exact = {true} render = {(props) => {
                            return <LoginComponent 
                            {...props}
                            difUi = {difUi}
                            />
                        }}/>
                        <Route path = '/register' component = {RegisterComponent} exact = {true} />
                    </div>
                )
            }
        </div>
    )
}
export default UserauthComponent