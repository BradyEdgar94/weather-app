import React from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import styles from './style';

const Header = ({ classes }) => (
    <header className={classes.header}>
        <Link to="/edit"><span className="fa fa-hamburger"></span></Link>
    </header>
);


export default injectSheet(styles)(Header);
