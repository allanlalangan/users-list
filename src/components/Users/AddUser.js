import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsInputValid(false);
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return
    }
    if (+enteredAge < 1) {
      setIsInputValid(false);
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>0)',
      });
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

  const closeModal = () => {
    setError(null);
  }

  const usernameInputChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
    if (enteredUsername.length > 0) {
      setIsInputValid(true);
    }
  };
  const ageInputChangeHandler = (e) => {
    setEnteredAge(e.target.value);
    if (enteredAge > 0) {
      setIsInputValid(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModal}/>}
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
          type="number"
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
