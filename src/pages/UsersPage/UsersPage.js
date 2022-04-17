import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../../components";

const UsersPage = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersPage};