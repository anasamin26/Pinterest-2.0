import './PublicProfile.css'
import React, { useState } from 'react';
import StickyFooter from '../StickyFooter/StickyFooter';

export default function PublicProfile() {
    const [publicProfile, setPublicProfile] = useState({ 
        preview: "",
        raw: "",
        firstName: "",
        lastName: "",
        about: "",
        pronoun: "",
        website: "",
        username: ""
       });
    const handleChange = e => {
          setPublicProfile({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
            [e.target.name]: e.target.value
          });
      };
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(publicProfile)
      }
      const resetInputField = () => {
        setPublicProfile({...publicProfile,         
        preview: "",
        raw: "",
        firstName: "",
        lastName: "",
        about: "",
        pronoun: "",
        website: "",
        username: ""})
      };

    return (
    <div className='mt-5 edit-container'>
        <h3><b>Public Profile</b></h3>
        <form onSubmit={handleSubmit}>
        <p className='text-muted mb-4'>People visiting your profile will see the following info</p>
        <small className='text-muted'>Photo</small><br/>
        <label htmlFor="profile-pic">
            {publicProfile.preview ? (
            <img src={publicProfile.preview} alt="dummy" width="75px" className='rounded-circle'/>
            ) : (
                <img src='./person.png' className='rounded-circle' width="75px"/>)
            }
        </label>
        <input
            type="file"
            id="profile-pic"
            style={{ display: "none" }}
            onChange={handleChange}
        />
        <button class="btn mx-2" style={{backgroundColor:"#f0ecec", fontWeight:"bold", borderRadius:"20px"}}>Change</button>
        <div className='row mt-3'>
            <div class="form-group col-md-6">
            <label><small>First Name</small></label>
            <input type="text" class="form-control input-fields" id="FirstName" value={publicProfile.firstName} onChange={(e)=> setPublicProfile({...publicProfile, firstName: e.target.value})} placeholder="First Name"/>
            </div>
            <div class="form-group col-md-6">
            <label><small>Last Name</small></label>
            <input type="text" class="form-control input-fields" id="LastName" value={publicProfile.lastName} onChange={(e)=> setPublicProfile({...publicProfile, lastName: e.target.value})} placeholder="Last Name"/>
            </div>
        </div>
        <div class="form-group mt-3">
            <label><small>About</small></label>
            <textarea class="form-control input-fields" id="About" value={publicProfile.about} onChange={(e)=> setPublicProfile({...publicProfile, about: e.target.value})} style={{width:"100%", rows:"3", minHeight:"90px"}}/>
        </div>
        <div class="form-group mt-3">
            <label><small>Pronouns</small></label>
            <select class="form-select input-fields">
              <option selected>Add your pronouns</option>
              <option value="1">ey/em</option>
              <option value="2">he/him</option>
              <option value="3">ne/nem</option>
              <option value="4">she/her</option>
              <option value="5">they/them</option>
              <option value="6">ve/ver</option>
              <option value="7">xe/xem</option>
              <option value="8">xie/xem</option>
              <option value="9">ze/zir</option>
            </select>
            <p className='text-muted' style={{fontSize:"11px"}}>Choose up to 2 sets of pronouns to appear on your profile so others know how to refer to you. You can edit or remove these any time.</p>
            <div class="form-group">
                <label><small>Website</small></label>
                <input type="url" class="form-control input-fields" id="Website" value={publicProfile.website} onChange={(e)=> setPublicProfile({...publicProfile, website: e.target.value})} placeholder="https://example.com/"/>
            </div>
            <div class="form-group mt-3 my-5">
                <label><small>Username</small></label>
                <input type="text" class="form-control input-fields" id="Username" value={publicProfile.username} onChange={(e)=> setPublicProfile({...publicProfile, username: e.target.value})} placeholder="Username"/>
                <p className='text-muted footer-margin' style={{fontSize:"11px"}}>www.pinterest.com/username</p>
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
)
}