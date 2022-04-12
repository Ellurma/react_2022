import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body}=post
    return (
        <div>
            <h3>id:{id}</h3>
            <h3>userId:{userId}</h3>
            <h3>title:{title}</h3>
            <p>{body}title</p>
            <hr/>
        </div>
    );
};

export default Post;