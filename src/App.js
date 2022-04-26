import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";

import {MainLayout} from "./layout";
import {PostCommentsPage, PostDetailsPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";

const App = () => {
    return (
        <div>
        <Routes>
            <Route index element={<Navigate to={'users'}/>}/>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostDetailsPage/>}/>
                    </Route>
                </Route>

                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>

                </Route>

            </Route>
        </Routes>

        </div>
    );
};

export default App;