import PostSummaryListItem from "./post-list-item";
import react from "react";
import post from "./post.json";

const PostSummaryList = () => {
    return (
            <div className="list-group">
            <div className="list-group-item">
                {
                    post.map(
                        post => {
                        return(PostSummaryListItem(post));
                        }
                    )
                }
            </div>
            </div>
); }

export default PostSummaryList;