import { Grid } from '@material-ui/core';
import React from 'react';
import Product from '../Product/Product';
import useStyle from './styles';

const products = [
    { id: 1, name: "Shoe", description: "Running Shoes", price:"$50"},
    { id: 2, name: "Laptop", description: "Apple Macbook", price:"$50" },
    { id: 3, name: "Phone", description: "Samsung Phone", price:"$50" },
];

const Products = () => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>  
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    );
};

export default Products;