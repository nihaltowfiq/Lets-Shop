import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../images/logo.png';
import useStyle from './styles';


const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Lets' Shop" height="25px" className={classes.image} />
                        Let's Shop
                    </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={5} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;