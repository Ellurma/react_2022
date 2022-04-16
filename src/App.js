import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {MainLayout} from "./layout";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SiglePostPage, SingleUserPage, UsersPage} from "./pages";

const App = () => {
    return (
        <div>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<Navigate to={'/home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SiglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                  <Route path={'*'} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
        </div>
    );
};

export default App;