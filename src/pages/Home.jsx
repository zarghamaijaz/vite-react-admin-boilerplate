import React, { useState, useEffect } from 'react'
import { GetUsersApi } from '../service/apis';

function Home() {
    const [users, setUsers] = useState(null);
    async function getUsers(){
        try{
            const res = await GetUsersApi();
            setUsers(res);
        }catch(err){
            console.error(err);
            setUsers(false);
        }
    }
    useEffect(() => {
        getUsers();
    },[]);
  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>HOME PAGE</h2>
        <div>
            <div className='mb-2 font-medium'>Here&apos;s a list of dynamically fetched users from an API:</div>
            {users === null ? (
                <div>Loading...</div>
            ) : users.length === 0 ? (
                <div>No users found.</div>
            ) : users === false ? (
                <div>
                    <div className='mb-2'>An error occured while fetching user</div>
                    <button onClick={getUsers} className='px-4 py-1 rounded border border-primary text-primary'>Retry</button>
                </div>
            ) : users.map((user) => (
                <div key={user.id} className='mb-4'>
                    <div>{user.name}</div>
                    <div className='text-sm text-gray-600'>{user.email}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home