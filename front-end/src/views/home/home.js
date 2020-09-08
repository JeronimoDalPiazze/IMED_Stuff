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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein, animal) {
    return { name, calories, fat, carbs, protein, animal };
}

const rows = [
    createData('Controle Ar 21', 'Controles', 'Reservado', 305, '06/09/2020', '10/09/2020'),
];

function Home() {

    const classes = useStyles();

    return (
        <div>
            <Header />
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.animal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home;
