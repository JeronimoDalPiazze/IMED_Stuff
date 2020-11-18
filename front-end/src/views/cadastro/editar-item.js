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


export default function EditarItem(props) {

    const classes = useStyles();


    const Material = {
        id: null,
        material: "",
        descricao: "",
        categoria: "",
        sala: null,
        data: ""
    };

    
    const [currentMaterial, setCurrentMaterial] = useState(Material);


    const getTutorial = id => {
        Services.findById(id)
            .then(response => {
                setCurrentTutorial(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    useEffect(() => {
        getTutorial(props.match.params.id);
    }, [props.match.params.id]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentMaterial({ ...currentMaterial, [name]: value });
    };


    const updateMaterial = () => {
        var values = {
            d_mat: currentMaterial.material,
            d_desc: currentMaterial.descricao,
            d_cat: currentMaterial.categoria,
            d_sala: currentMaterial.sala,
            d_data: currentMaterial.data
        };
        Services.updateMaterial(props.match.params.id, values)
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
                            value={currentMaterial.material}
                            onChange={handleInputChange} />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Descrição"
                            variant="outlined"
                            value={currentMaterial.descricao}
                            onChange={handleInputChange} />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Categoria"
                            variant="outlined"
                            value={currentMaterial.categoria}
                            onChange={handleInputChange} />
                    </form >
                    <form className={classes.root2} noValidate autoComplete="off">
                        <TextField id="outlined-basic"
                            label="Sala"
                            variant="outlined"
                            value={currentMaterial.sala}
                            onChange={handleInputChange} />
                        <TextField id="outlined-basic"
                            label="Data de cadastro"
                            variant="outlined"
                            value={currentMaterial.data}
                            onChange={handleInputChange}
                            onChange={(e) => { setData(e.target.value) }} />
                    </form >
                    <form className={classes.root2} noValidate autoComplete="off">
                        <Button variant="contained"
                            onClick={() => { updateMaterial() }} >Atualizar item
                        </Button>
                    </form>
                </Box>
            </Container>
        </>
    )
}
