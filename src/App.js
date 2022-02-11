import React, { useState } from 'react';
import Wrapper from './components/helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import usersData from './components/Users/data/users';
import ErrorModal from './components/UI/ErrorModal';

const App = () => {
  const [usersList, setUsers] = useState(usersData);
  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  }

  return (
    <Wrapper>
      {/* <ErrorModal /> */}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Wrapper>
  )
}

export default App;
