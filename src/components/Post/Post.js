import React from 'react';
import {Link} from "react-router-dom"

const Post = ({post}) => {
    const {id,title}= post;
    return (
        <div>
            {id}--{title}<Link to={id.toString()}>get Details</Link>
        </div>
    );
};

export {Post};