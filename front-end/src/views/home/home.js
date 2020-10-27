import React, { useState, useEffect } from "react";
import Header from '../../components/header/header';
import Services from "../../services/user.service";

import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center'
    },
    table: {
        margin: theme.spacing(1),
        minWidth: 760,
        justifyContent: 'center'
    },
    text: {
        margin: theme.spacing(2),
        textAlign: "center",
        justifyContent: 'center'
    },
    search: {
        '& .MuiTextField-root': {
            width: 200,
            justifyContent: 'center'
        },
    }
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        color: theme.palette.common.black,
        fontSize: 14,
        fontWeight: "bold",
        margin: theme.spacing(1),
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


function createData(descricao, categoria, status, funcionario, sala, dataRev, dataDev) {
    return { descricao, categoria, status, funcionario, sala, dataRev, dataDev };
}

const rows = [
    createData('Controle Ar 21', 'Controles', 'Reservado', 'Fahad Kalil', 305, '06/09/2020', '10/09/2020'),
    createData('Estojo 302A', 'Estojos', 'Livre', ' ', 302),
    createData('Controle Ar 19', 'Controles', 'livre', ' ', 203),
    createData('Estojo 105B', 'Estojos', 'Reservado', 'Fahad Kalil', 105, '06/09/2020', '10/09/2020'),
    createData('Controle DS 301B', 'Controles', 'Retirado', 'Fahad Kalil', 301, '06/09/2020', '10/09/2020'),
    createData('Estojo 208C', 'Estojos', 'Livre', ' ', 208),
];

function Home() {

    const [materials, setMaterials] = useState([]);
    const [currentMaterial, setCurrentMaterial] = useState(null);
    const [searchDescription, setSearchDescription] = useState("");


    useEffect(() => {
        getMaterials();
    }, []);


    const getMaterials = () => {
        Services.getMainPage()
            .then(response => {
                setMaterials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByDesc = () => {
        Services.findByDescription(desc)
            .then(response => {
                setMaterials(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const classes = useStyles();

    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <Header />
            <div className={classes.text} >
                <h3>Tabela de itens</h3>
            </div>
            <div className={classes.text}>
                <form align='center' className={classes.search}>
                    <FormControl>
                        <TextField id="filled-basic" label="Item" variant="outlined" size="small" />
                    </FormControl>
                    <FormControl>
                        <TextField id="filled-basic" label="Funcionário" variant="outlined" size="small" />
                    </FormControl>
                    <FormControl>
                        <Button variant="contained" >Pesquisar</Button>
                    </FormControl>
                </form>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Material</StyledTableCell>
                            <StyledTableCell align="center">Categoria</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Reservado por</StyledTableCell>
                            <StyledTableCell align="center">Sala</StyledTableCell>
                            <StyledTableCell align="center">Data de reserva</StyledTableCell>
                            <StyledTableCell align="center">Data de devolução</StyledTableCell>
                            <StyledTableCell align='center'>Botão de seleção</StyledTableCell>
                            <StyledTableCell align='center'>Editar item</StyledTableCell>
                            <StyledTableCell align='center'>Excluir item</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow className={classes.root} key={row.descricao}>
                                <StyledTableCell component="th" scope="row">{row.descricao}</StyledTableCell>
                                <StyledTableCell align="center">{row.categoria}</StyledTableCell>
                                <StyledTableCell align="center">{row.status}</StyledTableCell>
                                <StyledTableCell align="center">{row.funcionario}</StyledTableCell>
                                <StyledTableCell align="center">{row.sala}</StyledTableCell>
                                <StyledTableCell align="center">{row.dataRev}</StyledTableCell>
                                <StyledTableCell align="center">{row.dataDev}</StyledTableCell>
                                {
                                    row.dataRev ?
                                        <StyledTableCell><Button variant="contained" disabled >Reservado</Button></StyledTableCell>
                                        :
                                        <StyledTableCell><Button variant="contained" >Reservar</Button></StyledTableCell>
                                }
                                <StyledTableCell><Button variant="contained" >Editar</Button></StyledTableCell>
                                <StyledTableCell><Button variant="contained" >Excluir</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default Home;
