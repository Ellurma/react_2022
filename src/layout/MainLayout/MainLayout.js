import React from 'react';
import css from './MainLayout.module.css'
import {NavLink} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={css.header}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>

        </div>
    );
};

export {MainLayout};