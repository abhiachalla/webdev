// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import React from "react";
import {Link} from "react-router-dom";
// import NavigationSidebar from "./navigation-sidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem.js";
// import WhoToFollowList from "./WhoToFollowList/index";
// import PostSummaryList from "./post-summary-list";

const Tuiter = () => {
    return(
        <>
               <h1>Tuiter</h1>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/">
              Labs
          </Link>

        </>

        
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
