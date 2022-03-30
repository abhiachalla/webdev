import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

const EditProfile = () =>{
    const profileData = useSelector((state) => state.profile.profile)
    
    const [name, setName] = useState(profileData["firstName"] + " " + profileData["lastName"]);
    const [bio, setBio] = useState(profileData["bio"]);
    const [website, setWebsite] = useState(profileData["website"]);
    const [location, setLocation] = useState(profileData["location"]);
    const [dob, setDob] = useState(profileData["dateOfBirth"]);
 

    let[newInput, setProfileData] = useState({})
    const dispatch = useDispatch();
    const saveChanges = () => {

        profileData["firstName"] = name.split(" ")[0];
        profileData["lastName"] = name.split(" ")[1];
        profileData["bio"] = bio;
        profileData["website"] = website;
        profileData["location"] = location;
        profileData["dateOfBirth"] = dob; 
    

        dispatch({type:'save', profileData})
    }

    return(
        <>
        <div className="pb-5 mb-5">
            <div className = "row">
                <div className = "col-2">
                    <Link to="/tuiter/profile"><i className="fas fa-times" aria-hidden="true"></i></Link>
                </div>
                <div className = "col-8">
                    <div className = "row pb-0 mb-0">
                        <h5>Edit Profile</h5>
                    </div>
                </div>
                <div className="col-2 mb-2">
                    <button className="btn btn-light rounded-pill wd-save-btn" onClick={saveChanges}>
                       <Link to="/tuiter/profile"> <strong>Save</strong> </Link>
                    </button>
                </div>
            </div>

            <div className= "wd-image-holder">
                <div className="row wd-bannerImage">
                    <img src={profileData.bannerPicture} />
                </div>

                <div className = "row px-2">
                <img src= {profileData.profilePicture} className="rounded-circle ms-3 wd-profile-image-edit img-fluid bg-white" />
                </div>
            </div>
            <div className = "wd-details-form">
                <ul className="list-group">

                    <li className="wd-border-top list-group-item wd-item-list">  
                        <label>Name</label>  
                        <input type="text" placeholder= "Name" defaultValue={profileData.firstName + " " + profileData.lastName} className="form-control " name="name"
                         value={name} onChange = {(e) => setName(e.target.value)}/>
                    </li>
                    <br/>
                    <li className="list-group-item wd-item-list">
                        <label>Bio</label>
                        <textarea defaultValue={profileData.bio} className="form-control" name = "bio" value={bio}
                        onChange = {(e) => setBio(e.target.value)}> 
                        </textarea>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Location</label>
                        <input type="text" placeholder="Location" defaultValue={profileData.location} className="form-control " name = "location" value = {location}
                        onChange = {(e) => setLocation(e.target.value)}/>
                    </li>
                    <br/>  
                    <li className="list-group-item wd-item-list">
                        <label>Website</label>
                        <input type="text" placeholder="Website" defaultValue={profileData.website} className="form-control" name = "website" value = {website}
                        onChange = {(e) => setWebsite(e.target.value)}/>
                    </li>
                    <br/>      
                    <li className="list-group-item wd-border-btm wd-item-list">
                        <label>Birth Date</label>
                        <input type="text" placeholder="DOB" defaultValue={profileData.dateOfBirth} className="form-control  "  name = "dateOfBirth" value = {dob}
                        onChange = {(e) => setDob(e.target.value)}/>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default EditProfile;