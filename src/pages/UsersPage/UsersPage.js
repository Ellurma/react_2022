import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import {userService} from "../../services";
import {User} from "../../components";
import {PostDetailsPage} from "../PostDetailsPage/PostDetailsPage";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div>

                <div>
                    <div><Outlet/></div>
                </div>
                <div>
                    <PostDetailsPage/>
                </div>

            </div>
        </div>
    );
};

export {UsersPage}; 