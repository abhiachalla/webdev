import PostSummaryList from "../post-summary-list/index.js";
import react from "react";
import './explore.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row wd-search-align ms-5 ">
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-sm-9 col-md-9 rounded-pill bg-white">
                <div className="wd-search input-form bg-white">
                    <i className="bg-white"><i className="fas fa-search pt-2"></i></i>
                    <input type="text" className="bg-white color-muted form-control" placeholder="Search Tuiter"/>
                </div>
                
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 me-1">
                <a className="fas fa-cog fa-2x ms-5" href="#"></a>
            </div>
           </div>
           <div className="nav nav-tabs flex-md-nowwrap pt-3 " >
                    <li className="nav-item">
                            <a href="#" className="nav-link active"> <span className="text-white">For you</span></a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">Trending</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">COVID-19</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link ">News</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link d-none d-lg-block">Sports</a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link d-none d-xxl-block">Entertainment</a>
                    </li>
            </div>
            <div className="card mt-2">
                <img className="card-img-top" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="starship image"/>
                <div className="card-body text-white wd-text-large rgba-black-light p-2 wd-bottom-left wd-fonts-bold "> 
                    SpaceX's Starship 
                </div>
             </div>  
             <div>
                     {PostSummaryList()}
             </div>
        </>
    );
}
export default ExploreComponent;