import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './UsersSlice';

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    if (users.status === 'loading') {
        return <h2>Loading...</h2>
    }

    if (users.error) {
        return <h2>{users.error}</h2>
    }

    return (
        <div>
            <h1>Users</h1>
            {users.values.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}

export default Users;
