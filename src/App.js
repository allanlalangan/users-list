import React, {useState} from 'react'
import Wrapper from './components/helpers/Wrapper'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
import usersData from './components/Users/data/users'

const App = () => {
	const [usersList, setUsers] = useState(usersData);
	const addUserHandler = newUser => {
		setUsers(prevUsers => {
			return [newUser, ...prevUsers]
		})
	};

	return (
		<Wrapper>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</Wrapper>
	)
}

export default App
