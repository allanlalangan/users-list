import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if (+enteredAge < 1) {
      return
    }
    
    const newUser = {
      id: Date.now().toString(),
      username: enteredUsername,
      age: enteredAge,
    }

    props.onAddUser(newUser);
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          value={enteredUsername}
          onChange={(e) => {setEnteredUsername(e.target.value)}}
        />
        <label htmlFor="age">Age (years)</label>
        <input 
          type="age"
          id="age"
          value={enteredAge}
          onChange={(e) => {setEnteredAge(e.target.value)}}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;
