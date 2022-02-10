import React from 'react';
import Card from '../UI/Card';
import classes from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <li>
      <Card className={classes.user}>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </Card>
    </li>
  )
}

export default UserItem