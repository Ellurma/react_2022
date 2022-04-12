import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../user/User";

const Users = ({setUserDetails, trigger}) => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            <ul>
                {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails} trigger={trigger}/>)}
            </ul>
        </div>
    );
};

export default Users;