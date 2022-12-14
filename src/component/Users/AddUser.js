import React , { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser (props) {


    const [ enteredUserName , setEnteredUserName ] = useState('');
    const [ enteredAge , setEnteredAge ] = useState('');
    const [ error , setError ] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter a Valid Name and Age'
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please Enter a Valid Age'
            })
            return;
        }
        props.onAddUser(enteredUserName , enteredAge); 
        setEnteredUserName('');
        setEnteredAge('');
    };


    const usernameChandeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            { error && ( <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler} /> )}
            <Card className= {classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName</label>
                    <input id='username' type='text'  value={enteredUserName} onChange= {usernameChandeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number'  value={enteredAge} onChange= {ageChangeHandler} />
                    <Button type= 'submit'>Add User</Button>
                </form>
            </Card>
        </div>    
    );
};

export default AddUser;
