import React from 'react'
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: 20
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" theme={theme} color="primary">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button component={Link} to={'/home'} color="inherit">
                            IMED Stuff
                        </Button>
                    </Typography>
                    <Button component={Link} to={'/cadastrar_funcionario'} color="inherit">Add colaborador</Button>
                    <Button component={Link} to={'/cadastrar_item'} color="inherit">Add item</Button>
                    <Button component={Link} to={'/'} color="inherit">Log out</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
