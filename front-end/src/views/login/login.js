import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import './login.css';

import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
        },
    },
    buttons: {
        margin: theme.spacing(3)
    }
}));


// main component function
function Login() {

    const style = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const history = useHistory();

    // const handleClick = () => {
    //     history.push("/home");
    // }

    return (
        <>
            { redirect === true ? <Redirect to='/home' /> :

                <div className='login-content'>
                    <div>
                        <h1>Imed Stuff</h1>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="my-input">E-mail do usuário</InputLabel>
                            <Input id="my-input"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <TextField
                                hintText="Password"
                                label="Senha"
                                floatingLabelText="Password"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </FormControl>
                    </div>
                    <div className={style.buttons}>
                        <Button variant="outlined" color="primary"
                            onClick={() => { setRedirect(true) }}>
                            LOGIN
                        </Button>
                        <Button variant="outlined" color="primary">
                            Cadastrar
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default Login;
