import React from 'react'
import classes from './Header.module.css';

function Header(props) {
  return (
    <div className={classes.header}>
        <h1>Snapshut</h1>
        <div>{props.children}</div>
    </div>
  )
}

export default Header