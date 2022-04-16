import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../../components";

const SiglePostPage = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null);
    useEffect(()=>{
    postService.getById(id).then(({data})=>setPost(data))
},[id])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SiglePostPage};