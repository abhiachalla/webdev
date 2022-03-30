// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import React from "react";
import {Link, Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/NavigationSideBar";


import WhoToFollowList
       from "./WhoToFollowList/index.js";
import HomeScreen from "./homescreen/homescreen";

import tuitsReducer from './reducers/tuits-reducer'
import whoReducer from "./reducers/who-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ExploreComponent from "./explore-screen/explore-screen";
import TuitList from "./tuit-list";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);
const Tuiter = () => {
    return(

               <div className="row mt-2">
      <div className="col-2 col-lg-1 col-xl-2">
        
        <NavigationSidebar active='home'/>
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
         <TuitList/>
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4">
      <WhoToFollowList/>
      </div>
    </div>

    )
};
export default Tuiter;


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
