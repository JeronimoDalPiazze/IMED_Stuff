import React, { useState, useEffect } from "react";
import Header from '../../components/header/header';
import Services from "../../services/user.service";

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


export default function CadastroItem() {

    const classes = useStyles();

    const [material, setMaterial] = useState();
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();
    const [sala, setSala] = useState();
    const [data, setData] = useState();

    const salvarMaterial = () => {
        var values = {
            d_mat: material,
            d_desc: descricao,
            d_cat: categoria,
            d_sala: sala,
            d_data: data
        };
        Services.createMaterial(values)
            .then((response) => {
                console.log(response.data);
                props.history.push("/home");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Box justifyContent="center" m={1} p={1} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Material"
                            variant="outlined"
                            onChange={(e) => { setMaterial(e.target.value) }} />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Descrição"
                            variant="outlined"
                            onChange={(e) => { setDescricao(e.target.value) }} />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Categoria"
                            variant="outlined"
                            onChange={(e) => { setCategoria(e.target.value) }} />
                    </form >
                    <form className={classes.root2} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Sala"
                            variant="outlined"
                            onChange={(e) => { setSala(e.target.value) }} />
                        <TextField id="outlined-basic"
                            label="Data de cadastro"
                            variant="outlined"
                            onChange={(e) => { setData(e.target.value) }} />
                    </form >
                    <form className={classes.root2} noValidate autoComplete="off">
                        <Button variant="contained"
                            onClick={() => { salvarMaterial() }} >Cadastrar item
                        </Button>
                    </form>
                </Box>
            </Container>
        </>
    )
}
