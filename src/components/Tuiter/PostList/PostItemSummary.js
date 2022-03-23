import PostItem from "./PostItem.js";
import post from "./posts.json";
const PostItemSummary = () => {
    return (
            <div>
         
                {
                    post.map(
                        post => {
                        return(
                            <PostItem post= {post}/>
                            );
                        })
                }
            </div>
            
); }

export default PostItemSummary;