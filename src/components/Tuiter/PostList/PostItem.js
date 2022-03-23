
import React from 'react';
import "../ChallengeHomeScreen/HomeScreen.js"

const PostItem = ({post}) => {
    return (
   <>
    <div className="row border-bottom border-secondary wd-fonts-family">
        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
            <div className="py-2 px-1" ><img className="wd-avatar" src={post.avatar} width="54px" height="54px"/></div>
        </div>
                    
    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">

    
        <div className="p-1 ms-4" > 

                <span className="p-1 wd-fonts-bold wd-fonts-white"> {post.userName} <i className="px-1 fas fa-check-circle"></i> </span>
                <span className="wd-fonts-lightgray"> {post.handle}  &middot; {post.time} </span>
                
                <div className="text-white p-1" >{post.title}</div>
                <div className="wd-rounded-corners wd-border-solid wd-border-thin wd-border-darkgray">
                    <div> 
                    <img className="wd-top-rounded  wd-border-solid wd-border-thin wd-border-darkgray" src={post.image} width="100%" height="274px"/> 
                    </div>
                        <div className="ms-2 text-white pt-2" > <span className="wd-fonts-bold"> {post.image_title} </span></div>
                        <div className="ms-2 me-2 pt-2" > {post.description} </div>
                        <div className="ms-2 mb-1 mt-1" > {post.linkicon}  {post.site_link} </div>
                </div>
        </div>        
            
            <div className="ms-2 py-3 d-flex justify-content-evenly align-items-start" >
                <a className="wd-fonts-highlight text-decoration-none" > <i className="far fa-comment"></i> <span className="wd-margin-left"> {post.comments} </span></a>
                <a className="wd-fonts-highlight ms-4 text-decoration-none" > <i className="fa fa-retweet"></i> <span className="wd-margin-left"> {post.retweet} </span></a>
                <a className="wd-fonts-highlight ms-4 text-decoration-none" > <span className="wd-fg-color-red"> <i className="far fa-heart"></i> </span>  <span className="wd-margin-left">{post.likes}</span></a>
                <a className="wd-fonts-highlight px-4 text-decoration-none" > <i className="fa fa-upload"></i> <span className="wd-margin-left"> </span></a>
            </div>
  





</div>
</div>   
</>

); }


export default PostItem;
