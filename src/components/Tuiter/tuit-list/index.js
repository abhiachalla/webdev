import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
       from "./tuit-list-item";

       import './tuit.css';
       import WhatsHappening
       from "../whats-happening";

const TuitList = () => {
  const tuits = useSelector(
    state => state.tuits);

  return (
    <>
    <WhatsHappening/>
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
          <TuitListItem 
          tuit={tuit}/>)
        }
    </ul>
        </>
  );
}

export default TuitList;