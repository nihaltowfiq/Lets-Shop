import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyle from './styles';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQuantity }) => {
    const classes = useStyle();
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent classNmae={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>                
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1 )} type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1 )} type="button" size="small">+</Button>
                </div>
                <Button onClick={() => onRemoveFromCart(item.id)} variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;