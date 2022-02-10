import React from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (years)</label>
        <input type="age" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;
