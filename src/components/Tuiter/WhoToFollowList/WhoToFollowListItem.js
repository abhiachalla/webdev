import '../../../vendors/bootstrap/bootstrap.min.css';
 import React from "react";


const WhoToFollowListItem = ({
    who
}) =>{
    return(
    
        <div className="row">
            
                    <div className="col-2 pb-3" >
                        <img src={who.avatarIcon} alt="image"  className="img-fluid rounded-circle"/>
                    </div>
                    <div className="col-6">
                        <div className="fw-bold"> {who.userName} 
                        <i className="fas fa-check-circle"></i> 
                        </div> 
                        <div>@{who.handle}</div>
                    </div>
                    <div className="col-3"> 
                        <button type="button" className="mt-2 btn rounded-pill py-2 pt-2 bg-primary text-white">
                            Follow
                        </button>
                    </div>
                    
        </div>

        );
    }
    
    export default WhoToFollowListItem;