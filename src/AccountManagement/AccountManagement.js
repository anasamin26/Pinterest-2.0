import './AccountManagement.css'
import React, { useState } from 'react';
import StickyFooter from '../StickyFooter/StickyFooter';

export default function AccountManagement() {
const [account, setAccount] = useState({ 
    email: "",
    password: "",
   });

  const handleChange = e => {
      setAccount({
        [e.target.name]: e.target.value
      });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(account)
  }

  const resetInputField = () => {
    setAccount({...account, email: "", password:""})
  };

return(
    <div>
        <div className='mt-5 edit-container'>
            <h3><b>Account management</b></h3>
            <form onSubmit={handleSubmit}>
            <p className='mb-4'>Make changes to your email, password and account type. This information is private and won’t show up in your public profile.</p>
            <div class="form-group mt-3">
                <label><small>Email</small></label>
                <input type="email" class="form-control input-fields" value={account.email} onChange={(e)=> setAccount({...account, email: e.target.value})} placeholder="abc@gmail.com"/>
            </div>
            <div class="form-group mt-3">
                <label><small>Password</small></label>
                <input type="password" class="form-control input-fields" value={account.password} onChange={(e)=> setAccount({...account, password: e.target.value})}/>
            </div>
            <h5 className='mt-4'><b>Account Changes</b></h5>
            <div className='flex-container mt-4'>
                <div>
                    <p><b>Deactivate account</b></p>
                    <p>Hide your Pins and profile</p>
                </div>
                <div>
                    <button type="button" class="btn deactive-btn"><b>Deactivate Account</b></button>
                </div>
            </div>
            <div className='flex-container mt-3'>
                <div>
                    <p><b>Delete your data and account</b></p>
                    <p>Delete your account and account data</p>
                </div>
                <div>
                    <button type="button" class="btn deactive-btn"><b>Delete Account</b></button>
                </div>
            </div>
            <div style={{marginTop:"150px"}}>
            <div class="footer py-3">
                <button onClick={resetInputField} class="btn btn-align" style={{backgroundColor:"#f0ecec", fontWeight:"bold", borderRadius:"20px", height:"45px"}}>Reset</button>
                <button type="submit" class="btn mx-1" style={{backgroundColor:"#e80424", color:"white", fontWeight:"bold", borderRadius:"20px", height:"45px"}}>Save</button>
            </div>
            </div>
            </form>
        </div>
    </div>
)
}