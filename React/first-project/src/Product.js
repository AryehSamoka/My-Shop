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

const useStyles = makeStyles({
  card: {
    width: 150,
    height: 300,
    flex: 0.5
  },
  media: {
    width: 140,
    height: 140,
    flex: 0.5
  },
});

const Product = (props) => {
  const classes = useStyles();
  return (<Card className={classes.card}>
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
  </Card>)
}


export default Product;



