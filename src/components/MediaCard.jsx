import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { clientContext } from '../contexts/ClientContext';
import DetailPage from '../pages/DetailPage';
import Aos from "aos";
import "aos/dist/aos.css";


const MediaCard = (props) => {
    const { addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInFavorites, checkFavoriteInFavorites, getProducts } = useContext(clientContext)
    const [getDetails, productsDetail] = React.useState(false);
    // console.log(props);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <Card data-aos="zoom-in-down" sx={{ maxWidth: 280, margin: '10px', borderRadius: "10px", border: "1px solid black" }}
            className='cartochka'>
            <CardMedia
                component="img"
                height="250"
                width="250"
                style={{ objectFit: 'contain' }}
                image={props.product.image}
                alt="product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold", fontFamily: "revert" }}>
                    {props.product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bold", fontFamily: "revert" }}>
                    {props.product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: "20px", fontFamily: "revert", fontWeight: "600" }}>
                    {props.product.price} ??????
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addAndDeleteProductInCart(props.product)} >
                    <ShoppingCartIcon color={checkProductInCart(props.product.id) ? 'error' : 'primary'} />
                </Button>
                <Button size="small" onClick={() => addAndDeleteProductInFavorites(props.product)}>
                    <FavoriteIcon color={checkFavoriteInFavorites(props.product.id) ? 'error' : 'primary'} />
                </Button>
                <Link to={`/product/${props.product.id}`}>
                <Button size="small" style={{ fontFamily: "revert" }}
                    variant="contained"><small className="btn2">??????????????????</small></Button>
                </Link>
                {/* <DetailPage
                    // products={props.product}
                /> */}
            </CardActions>
        </Card>
    );
};

export default MediaCard;


