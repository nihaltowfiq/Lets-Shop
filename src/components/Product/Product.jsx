import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';

import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="https://cdn.chec.io/merchants/19661/assets/tv2wubQUhhbW1qAl|Screenshot 2020-11-25 at 10.56.41.png" title={Product.name}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    );
};

export default Product;