import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyle from './styles';

const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQuantity, handleEmptyCart }) => {
    const classes = useStyle();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart,
            <Link to="/" className={classes.link}> start adding some!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem
                                item={item}
                                onRemoveFromCart={handleRemoveFromCart}
                                onUpdateCartQuantity={handleUpdateCartQuantity}
                            />
                        </ Grid>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button onClick={handleEmptyCart} className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {
                !cart.line_items.length ? <EmptyCart /> : <FilledCart />
            }
        </Container>
    );
};

export default Cart;