import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartProduct from './CartProduct';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 4 * 8 * 2,
  }
}));

const Cart = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" spacing={8}>
      {props.products.map(item1 => (<Grid item xs={6} zeroMinWidth className={classes.root2}>
        <CartProduct key={item1.id} item={item1} removeItem={props.removeItem}></CartProduct>
      </Grid>
      ))}
    </Grid>
  )
}

export default Cart;