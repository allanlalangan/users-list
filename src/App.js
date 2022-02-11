import React, { useState } from 'react';
import Wrapper from './components/helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import usersData from './components/Users/data/users';


const App = () => {
  const [users, setUsers] = useState(usersData);
  const addUserHandler = (newUser) => {
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </Wrapper>
  )
}

export default App;
