import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value))
    },[])

    return (
        <div>
            <ul>
                {users.map(value => <User key={value.id} item={value}/>)}
            </ul>
        </div>
    );
};

export default Users;