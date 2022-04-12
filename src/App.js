import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UsersDetails from "./components/usersDetails/UsersDetails";
import Posts from "./components/posts/Posts";

import css from './App.module.css'
import {postService} from "./services";
import Post from "./components/post/Post";

const App = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([])
    const getUserId = async (userId) => {
        const {data} = await postService.getPostByUserId(userId);
        setPosts(data)
    }
const trigger = () => {
  setPosts([])
}
    return (
        <div>
            <div className={css.wrap}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                {userDetails && <UsersDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
            <hr/>
                <Posts posts={posts}/>
        </div>
    );
};

export default App;

