import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      width:300,
    },
    media: {
      width:140,
      height: 140,
    },
  });

const Product = (props) =>{
  const classes = useStyles();
    return(<Card className={classes.card}>
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
        <Typography variant="body2" color="textSecondary" component="p">
          amount = {props.item.amount}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button onClick={() => props.removeItem(props.item)} size="small" color="primary">
        remove from basket
      </Button>
    </CardActions>
  </Card>)
}


export default Product;



