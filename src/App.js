import React from 'react';
import Users from "./components/Users/Users";
import UsersDetails from "./components/usersDetails/UsersDetails";
import Posts from "./components/posts/Posts";

import css from './App.module.css'

const App = () => {
  return (
      <div>
        <div className={css.wrap}>
            <Users/>
            <UsersDetails/>
        </div>
          <Posts/>
      </div>
  );
};

export default App;

