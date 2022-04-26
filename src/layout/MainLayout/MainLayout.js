import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayout.module.css'


const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {MainLayout};