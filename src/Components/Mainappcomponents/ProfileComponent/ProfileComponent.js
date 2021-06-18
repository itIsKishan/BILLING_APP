import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ProfileComponent = (props) =>{
    const [profile, setProfile] = useState({})

    // making an axios request to get the info of the user
    useEffect(()=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/users/account',{"headers": {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
        .then((res)=>{
            setProfile(res.data)
        })
        .catch((err)=>{
            console.log(err.message)

        })
    },[])

    // it renders the profile information of the user
    return(
        <div className = 'd-flex align-item-center justify-content-center'>

        <div className="card text-dark bg-light mb-3" style={{width : 450}}>
            <div class="card-header">Profile</div>
            <div class="card-body">
            <b>ADMIN NAME - {profile.username}</b><br/>
            <b>EMAIL - {profile.email}</b><br/>
            <b>BUSINESS NAME - {profile.businessName}</b><br/>
            <b>ADDRESS - {profile.address}</b>
            </div>
        
        </div>
        </div>
    )
}
export default ProfileComponent