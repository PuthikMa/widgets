import React, { useState, useEffect } from 'react';
import axios from 'axios';


const URL = 'https://jsonplaceholder.typicode.com/users';

const Example = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {

        
        const loadUser = async () => {
          const response = await axios.get(URL);
        setUsers(response.data);
          console.log(response.data);
        }
        
        loadUser();
    }, []);
     
    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });
    
    return (
        <ul>
            {renderedUsers}
        </ul>
    );
}

export default Example;