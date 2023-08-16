import { useState, useEffect } from 'react';
import {getUsers, deleteUsers} from './services/users';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res));
  }, []);

  const handleDeleteUser = (id) => deleteUsers(id);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => handleDeleteUser(user.id)}>
          <p>{user.email}</p>
          <p>
            {user.first_name} {user.last_name}
          </p>
          <img src={user.avatar} />
        </li>
      ))}
    </ul>
  );
}

export default App
