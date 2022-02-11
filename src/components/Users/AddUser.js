import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isInputValid, setIsInputValid] = useState(true)

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsInputValid(false);
      return
    }
    if (+enteredAge < 1) {
      setIsInputValid(false);
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

  const usernameInputChangeHandler = (e) => {
    if (enteredUsername.trim().length > 0) {
      setIsInputValid(true);
    }
    setEnteredUsername(e.target.value);
  };
  const ageInputChangeHandler = (e) => {
    if (enteredAge.trim().length > 0) {
      setIsInputValid(true);
    }
    setEnteredAge(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className={`${classes.input} ${!isInputValid ? classes.invalid : ''}`}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameInputChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input 
          type="age"
          id="age"
          value={enteredAge}
          onChange={ageInputChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </Card>
    </form>
  )
}

export default AddUser;
