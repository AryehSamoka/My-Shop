import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, card: {
    width: 300,
    height: 400,
  },
  media: {
    width: 180,
    height: 220,
  },
});

const Product = (props) => {
  const classes = useStyles();
  return (<Paper elevation={3} className={classes.paper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={props.item.url}
          title={props.item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${props.item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => props.addItem(props.item)} size="small" color="primary">
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card></Paper>)
}

export default Product;