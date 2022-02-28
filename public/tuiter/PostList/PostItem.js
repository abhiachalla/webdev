const PostItem = (post) => {
    return (`
   
    <div class="row border-bottom border-secondary wd-fonts-family">
        <div class="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
            <div class="py-2 px-1" ><img class="wd-avatar" src=${post.avatar} width="54px" height="54px"/></div>
        </div>
                    
    <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 p-1">
    
        <div class="p-1 ms-4" > 
                <span class="p-1 wd-fonts-bold wd-fonts-white"> ${post.userName} <i class="px-1 fas fa-check-circle"></i> </span>
                <span class="wd-fonts-lightgray"> ${post.handle}  &middot; ${post.time} </span>
                
                <div class="text-white p-1" > ${post.title}</div>
                <div class="wd-rounded-corners wd-border-solid wd-border-thin wd-border-darkgray">
                    <div> 
                    <img class="wd-top-rounded  wd-border-solid wd-border-thin wd-border-darkgray" src=${post.image} width="100%" height="274px"/> 
                    </div>
                        <div class="ms-2 text-white pt-2" > <span class="wd-fonts-bold"> ${post.image_title} </span></div>
                        <div class="ms-2 me-2 pt-2" > ${post.description} </div>
                        <div class="ms-2 mb-1 mt-1" > ${post.linkicon}  ${post.site_link} </div>
                </div>
        </div>        
            
            <div class="ms-2 py-3 d-flex justify-content-evenly align-items-start" >
                <a class="wd-fonts-highlight" style="text-decoration: none;"> <i class="far fa-comment"></i> <span class="wd-margin-left"> ${post.comments} </span></a>
                <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <i class="fa fa-retweet"></i> <span class="wd-margin-left"> ${post.retweet} </span></a>
                <a class="wd-fonts-highlight ms-4" style="text-decoration: none;"> <span class="wd-fg-color-red"> <i class="far fa-heart"></i> </span>  <span class="wd-margin-left">${post.likes}</span></a>
                <a class="wd-fonts-highlight px-4" style="text-decoration: none;"> <i class="fa fa-upload"></i> <span class="wd-margin-left"> </span></a>
            </div>
  
</div>
</div>   
</div> 
`); }


export default PostItem;