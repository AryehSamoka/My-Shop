import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import AddProduct from './AddProduct';
import { Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 4 * 8 * 2,
  }
}));

function Products(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={8}>
          {props.products.map(item1 => (<Grid key={item1.id} xs={6} item zeroMinWidth >
            <Product addItem={props.addItem} key={item1.id} item={item1}></Product>
          </Grid>
          ))}
        </Grid>
      </div>
      <Switch>
        <Route exact path={'/'}>
          <Grid container justify="center" alignItems="center" spacing={8}>
            <Link to="/addProduct">add product</Link>
          </Grid>
        </Route>
        <Route path="/addProduct">
          <Grid container justify="center" alignItems="center" spacing={8}>
            <AddProduct
              addProduct={props.addProduct}></AddProduct>
          </Grid>
        </Route>
        <Route path="/">404</Route>
      </Switch>
    </div>
  )
}

export default Products;

export const initialProducts = [
  {
    id: 1, title: 'Shoes', url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    , price: 300
  },
  {
    id: 2, title: 'Shirt', url: "https://image.shutterstock.com/image-photo/mens-clothing-business-clothes-men-600w-1212614509.jpg"
    , price: 80
  },
  {
    id: 3, title: 'Umbrella', url: "https://images.unsplash.com/photo-1541697183324-e15d407c91cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    , price: 20
  },
  {
    id: 4, title: 'Pens', url: "https://image.shutterstock.com/image-photo/male-hands-pen-on-white-600w-62702461.jpg"
    , price: 120
  },
  {
    id: 5, title: 'Coat', url: "https://image.shutterstock.com/image-photo/gray-coat-260nw-296441642.jpg"
    , price: 700
  },
  {
    id: 6, title: 'Hat', url: "https://image.shutterstock.com/image-photo/two-stylish-black-bowler-hat-600w-749657392.jpg"
    , price: 500
  }
];
