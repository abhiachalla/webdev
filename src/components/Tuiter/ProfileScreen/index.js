import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSideBar.js"
import PostSummaryList from "../post-summary-list/index.js";
import ProfileComponent from "./ProfileComponent.js";
import TuitList from "../tuit-list"

const ProfileScreen = () => {
    return(
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="Profile"/>
            </div>
            <div class = "col-xxl-6 col-xl-6 col-lg-6 mb-3 col-md-10 col-sm-10 col-xs-10">
                <ProfileComponent/>
                <TuitList/>
            </div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
            <PostSummaryList title= "What's Happening"/>
            </div>  
        </div>
    )
};
export default ProfileScreen;