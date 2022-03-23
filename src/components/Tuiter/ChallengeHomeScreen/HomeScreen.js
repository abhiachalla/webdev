import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSideBar";
import PostSummaryList from "../PostList/PostItemSummary";
import PostItemSummary from "../post-summary-list/index.js"
const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active='home'/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
            <PostSummaryList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                
                <PostItemSummary/>
            </div>
        </div>
    );
};
export default HomeScreen;