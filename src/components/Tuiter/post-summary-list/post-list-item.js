import react from "react";
import '../../../vendors/bootstrap/bootstrap.min.css';


const PostSummaryListItem = (post) =>{
    return(
    
    <div className="row mt-2 ">
    <div className="col-9">
            <span className="text-muted">{post.topic}</span>
            <div className >
                <span className="text-white fw-bold">{post.userName} <i className="fas fa-check-circle"></i> <span className="text-muted"> - {post.time}</span> </span>
            </div>
            <div >
            {post.title}
            </div> 
        </div>
        <div className="col-3"> 
            <div><img className="img-thumbnail wd-img-right my-2" src={post.image}/></div> 
        </div>  
    </div>
    
         
     
    );
}

export default PostSummaryListItem;