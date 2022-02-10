import React from 'react';
import Card from '../UI/Card';
import classes from './User.module.css';

const User = (props) => {
  return (
    <Card className={classes.user}>
      <li>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </li>
    </Card>
  )
}

export default User