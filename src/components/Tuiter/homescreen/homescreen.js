import react from "react";
import PostItem from "./postItem";
import PostSummaryList from "../post-summary-list";
import posts from './posts.json'
import NavigationSidebar from "../NavigationSidebar/NavigationSideBar";
import CenterPost from "./CenterPosts";

const HomeScreen = () => {
    return (
        
        <div className="row mt-2">

       
        
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 ">
                <CenterPost/>           
        </div>      
        </div>
        

    )
};
export default HomeScreen;