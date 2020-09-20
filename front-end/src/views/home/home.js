import React from 'react'
import Header from '../../components/header/header';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    table: {
        margin: theme.spacing(1),
        minWidth: 650,
    },
    text: {
        margin: theme.spacing(2),
        textAlign: "center"
    }
}));

function createData(descricao, categoria, status, sala, dataRev, dataDev) {
    return { descricao, categoria, status, sala, dataRev, dataDev };
}

const rows = [
    createData('Controle Ar 21', 'Controles', 'Reservado', 305, '06/09/2020', '10/09/2020'),
    createData('Estojo 302A', 'Estojos', 'Livre', 302),
    createData('Controle Ar 19', 'Controles', 'livre', 203),
    createData('Estojo 105B', 'Estojos', 'Reservado', 105, '06/09/2020', '10/09/2020'),
    createData('Controle DS 301B', 'Controles', 'Retirado', 301, '06/09/2020', '10/09/2020'),
    createData('Estojo 208C', 'Estojos', 'Livre', 208),
];

function Home() {

    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.text} >
                <h3>Tabela de itens</h3>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Material</TableCell>
                            <TableCell align="right">Categoria</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Sala</TableCell>
                            <TableCell align="right">Data de reserva</TableCell>
                            <TableCell align="right">Data de devolução</TableCell>
                            <TableCell align='right'>Botão de seleção</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.descricao}>
                                <TableCell component="th" scope="row">{row.descricao}</TableCell>
                                <TableCell align="right">{row.categoria}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.sala}</TableCell>
                                <TableCell align="right">{row.dataRev}</TableCell>
                                <TableCell align="right">{row.dataDev}</TableCell>
                                {
                                    row.dataRev ? 
                                    <TableCell align="right"><Button variant="contained" disabled >Reservado</Button></TableCell>
                                    :
                                    <TableCell align="right"><Button variant="contained" >Reservar</Button></TableCell>                                     
                                }                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default Home;
