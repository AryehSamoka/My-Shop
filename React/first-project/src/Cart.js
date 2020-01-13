import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartProduct  from './CartProduct';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    margin:2,
    flexGrow: 1,
  },
}));
  

const Cart = (props) => {
  const classes = useStyles();
  
return(<div>      
  <Grid className={classes.root} container spacing={3}>
    {props.products.map(item1=>(<Grid key={item1.id} className={classes.root} item >       
               <CartProduct key={item1.id} item={item1} removeItem={props.removeItem}></CartProduct>
       </Grid>
    ))};
    
    </Grid></div>)
}
        
export default Cart;

