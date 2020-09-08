import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './login.css';

import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// main component function
function Login() {

    const style = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const history = useHistory();

    const handleClick = () => {
        history.push("/home");
    }
    
    return (
        <>
            { redirect === true ? <Redirect to='/home' /> :

                <div className='login-content'>
                    <div>
                        <h1>Login Imed Stuff...</h1>
                        <FormControl>
                            <InputLabel htmlFor="my-input">E-mail do usuário</InputLabel>
                            <Input id="my-input"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Nós não compartilhamos o seu e-mail</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className={style.root}>
                        <Button variant="outlined" color="primary"
                            onClick={() => { setRedirect(true) }}>
                            LOGIN
                        </Button>
                        <Button variant="outlined" color="primary"
                            onClick={ handleClick }>
                            LOGIN 2
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default Login;
