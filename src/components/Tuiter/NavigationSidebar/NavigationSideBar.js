import '../../../vendors/bootstrap/bootstrap.min.css';
import '../../../vendors/fontawesome-free-6.1.0-web/svgs/brands/twitter.svg';
import {Link} from "react-router-dom";
 import React from "react";



//here 
const NavigationSidebar = ({active}) => {
    return(
        <>
            <div className="list-group">
            <Link to="/a6"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/a6/tuiter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home p-2"></i>
                    <span className="d-none d-xl-inline ">Home</span>
                </Link>
                <Link to="/a6/tuiter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag p-2"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>

                
        
               
           
            <a className="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fa fa-bell"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Notifications
                    </div>
                </div>
            </a>
            <a className="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Messages
                    </div>
                </div>
            </a>
            <a className="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="far fa-bookmark"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Bookmarks
                    </div>
                </div>
            </a>
            <a className="list-group-item list-group-item-action py-3 wd-clr-black align-content-center"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fas fa-list-ul"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Lists
                    </div>
                </div>
            </a>                  
            <a className="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                Profile
                    </div>
                </div>
            </a>
            <a className="list-group-item list-group-item-action py-3 wd-clr-black"  href="#">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-1">
                       <span className="fas fa-ellipsis-h"></span>
                       
                    </div>
                    <div className="col-xxl-10 col-xl-8 d-none d-xl-block">
                                More
                    </div>
                </div>
            </a>

                 
            </div>
            <div className="d-grid mt-3">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
                       </>
    );
}
export default NavigationSidebar;