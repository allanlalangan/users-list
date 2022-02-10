import React from 'react';
import Wrapper from './components/helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import users from './components/Users/data/users';


const App = () => {
  return (
    <Wrapper>
      <AddUser />
      <UsersList users={users}/>
    </Wrapper>
  )
}

export default App;
