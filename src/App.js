import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {NotFoundPage, PostsPage, UsersPage} from "./pages";

const App = () => {
    return (
        <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
            </Route>
        </Routes>

        </div>
    );
};

export default App;