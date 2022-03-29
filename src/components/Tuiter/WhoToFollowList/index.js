import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";





const WhoToFollowList = () => {

    const who = useSelector(state => state.who);
    console.log(who);
    return (<>
            <div className="list-group">
 
            <div className="list-group-item">
            <div className = "pb-3" >Who to Follow</div>
               
            <div className="list-item">
                {
                    who.map(
                        who => {
                            return(
                                <WhoToFollowListItem who={who}/>
                                );
                        }
                        )
                    }
            </div>
            </div>
            </div>
                    </>
); }

export default WhoToFollowList;