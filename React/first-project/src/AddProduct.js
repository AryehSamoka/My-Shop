import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        width: 300,
        height: 200,
        flex: 0.5
    }
});

const AddProduct = (props) => {
    const [title1, setTitle] = useState('');
    const [url1, setUrl] = useState('');
    const [price1, setPrice] = useState(0);
    const history = useHistory();

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleChangeUrl = (event) => {
        setUrl(event.target.value);
    }
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleSubmit = (event) => {
        const item = { title: title1, url: url1, price: price1 };

        props.addProduct(item);

        history.push('/');

        event.preventDefault();
    }

    const classes = useStyles();
    return (<Card className={classes.card}>
        <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">

                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Please insert product details
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label>title
                <input value={title1} onChange={handleChangeTitle} type='text'></input>
                    </label><br></br>
                    <label>url
                <input value={url1} onChange={handleChangeUrl} type='text'></input>
                    </label><br></br>
                    <label>price
                <input value={price1} onChange={handleChangePrice} type='number'></input>
                    </label><br></br>
                    <input type='submit' value='submit'></input>
                </form>
            </fieldset>
        </CardActions>
    </Card>)
}

export default AddProduct;