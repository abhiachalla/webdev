import react from "react";
import posts from './posts.json';
import PostItem from "./postItem";

const CenterPost = ()=> {
    return (

        <div>
            {
                posts.map(
                    post => {
                    return(
                        <PostItem post = {post}/>
                    )
                    }
                )
            }
        </div>

    )

};

export default CenterPost;