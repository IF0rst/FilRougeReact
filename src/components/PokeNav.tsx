import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const PokeNav = () => {
    return (
        <AppBar
            position="fixed"
            color="default"
            sx={{
                width: '100%',
                top: 0,
                left: 0,
                right: 0,
                boxShadow: 'none',
                backgroundColor: 'white',
            }}
        >
            <Toolbar sx={{ paddingLeft: 0, paddingRight: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'black', paddingLeft: 2 }}>
                    PokeVisualizer
                </Typography>
                <Link to="/trainers">
                    <Button color="inherit">Captures</Button>
                </Link>
                <Link to="/pokemons">
                    <Button color="inherit">Pokemons</Button>
                </Link>
                <IconButton color="inherit" />
            </Toolbar>
        </AppBar>
    );
};

export default PokeNav;
