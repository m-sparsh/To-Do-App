import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CreateToDo from '../CreateToDo/CreateToDo.js';
import List from '../List/List.js';
import {NavLink , Route } from 'react-router-dom';


const header = () => (
    <>
            <nav>
                <input type="checkbox" id={classes.check} />
                <label for={classes.check}>
                <FontAwesomeIcon icon={faBars} className={classes.checkbtn} />
                </label>
                <label className={classes.Logo}>To-Do App</label>
                <ul>
                    <li><NavLink to="/" exact activeClassName={classes.Active}>Create</NavLink></li>
                    <li><NavLink to="/showlist" activeClassName={classes.Active}>Show List</NavLink></li>
                </ul>
            </nav>
            <Route  path="/" exact> <CreateToDo /> </Route>
            <Route  path="/showlist" exact props> <List /> </Route>
    </>
);

export default header;