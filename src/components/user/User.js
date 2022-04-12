import React from 'react';
import css from './user.module.css'

const User = ({user, setUserDetails, trigger}) => {
    const {id,name}=user;
    const click = () => {
        setUserDetails(user)
        trigger()
    }
    return (
        <div className={css.wrap}>
            {id}). {name}
            <button onClick={()=>click()}>Details</button>
        </div>
    );
};

export default User;