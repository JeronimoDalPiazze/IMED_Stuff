import React from 'react'
import Header from '../../components/header/header';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2, 2, 2, 2),
            width: '100ch',
            padding: '10px 10px 10px 10px',

        },
    },
    root2: {
        '& > *': {
            margin: theme.spacing(2),
            width: '47ch',
            padding: '10px 10px 10px 10px',

        },
    }
}));


export default function CadastroFuncionario() {

    const classes = useStyles();

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Box justifyContent="center" m={1} p={1} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Nome" variant="outlined" />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Cargo" variant="outlined" />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Número do crachá" variant="outlined" />
                    </form >                   
                    <form className={classes.root2} noValidate autoComplete="off">
                        <Button variant="contained" >Cadastrar funcionário</Button>
                    </form>
                </Box>
            </Container>
        </>
    )
}
