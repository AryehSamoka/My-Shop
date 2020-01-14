import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge1 = withStyles(theme => ({
  badge: {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles({
  card: {
    flex: 1
  },
});

const Header = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div><h1 className='App'> My shop</h1></div>
      <Card className={classes.card}>
        <CardActions>
          <Link to="/">Home</Link>
          <Link to="/cart"> <IconButton aria-label="cart">
            <StyledBadge1 badgeContent={props.amountAll} color="primary">
              <ShoppingCartIcon />
            </StyledBadge1>
          </IconButton></Link>
        </CardActions>
      </Card>
    </div>)
}

export default Header;