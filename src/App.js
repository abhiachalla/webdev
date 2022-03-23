import logo from './logo.svg';
import './App.css';
import React from "react";
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome-free-6.1.0-web/css/all.min.css'

import HelloWorld from "./components/hello-world";

import Labs from "./components/labs";
import Tuiter from "./components/Tuiter/index.js";



import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import NavigationSidebar from "./components/Tuiter/NavigationSidebar/NavigationSideBar";
// import {BrowserRouter, Link, Router} from "react-router-dom";
import WhoToFollowList from './components/Tuiter/WhoToFollowList/index';
import PostSummaryList from './components/Tuiter/post-summary-list/index.js';
import PostSummaryListItem from './components/Tuiter/post-summary-list/post-list-item.js';
import ExploreComponent from './components/Tuiter/explore-screen/explore-screen.js';
import HomeScreen from './components/Tuiter/ChallengeHomeScreen/HomeScreen.js';
import CenterPost from './components/Tuiter/homescreen/CenterPosts';

import Explore from './components/Tuiter/explore-screen/Explore';



function App() {
  return (

<BrowserRouter>
 <div className="container">
   <Routes>
     <Route path="/hello"
            exact={true}
            element={<HelloWorld/>}/>
     <Route path="/"
            exact={true}
            element={<Labs/>}/>
     <Route path= "/a6/tuiter"
            exact={true}
            element={<HomeScreen/>}/>
    <Route path="/a6/tuiter/home"
            exact={true}
            element={<HomeScreen/>}/>
    <Route path="/a6/tuiter/explore"
            exact={true}
            element={<Explore/>}/>
   </Routes>
 </div>
</BrowserRouter>

  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/home" element={<HomeScreen/>}>
  //     </Route>
  //     <Route path="/explore" element={<Explore/>}>
  //      </Route>
  //   </Routes>
  // </BrowserRouter>

    // <div className="row mt-2">
    //         <div className="col-2 col-md-2 col-lg-1 col-xl-2">
    //             <NavigationSidebar active="home"/>
    //         </div>
    //         <div className="col-10 col-md-10 col-lg-7 col-xl-6"
    //              style={{"position": "relative"}}>
    //             <ExploreComponent/>
    //         </div>
    //         <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
    //             <WhoToFollowList/>
    //         </div>
    //     </div>
  

    // <div className="row mt-2">
    //     <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-2 d-none d-sm-block">
    //     <HomeScreen/>
           
    //     </div>
    // </div>




    
    // <div className='container'>
    //   <div className='col-xl-3 col-l-3 col-m-3'>
    // <NavigationSidebar active="home"/>
    //   </div>
    //   <div className='col-xl-3 col-l-3 col-m-3'>
    // <WhoToFollowList/>
    //   </div>
    //   <div className='col-xl-3 col-l-3 col-m-3'>
    // <ExploreComponent/>
    //   </div>
    // </div>
    
   
  );
}

export default App;
