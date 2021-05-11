import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  CardMedia,
  Box,
  Button,
} from '@material-ui/core';

import imageFallBack from '../../../../../assets/images/fallBack.jpg';
import useStyles from './CartItemStyles';
import { ROUTES } from '../../../../../constants';

const CartItem = ({ history, product, addOrRemoveFromCart }) => {
  const classes = useStyles();

  const goToProductPage = (id) => {
    history.push(`${ROUTES.MAIN}/${id}`);
  };

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  const handleRemoveFromCart = () => {
    addOrRemoveFromCart(product);
  };

  return (
    <Grid item xs={12} className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <div
            className={classes.cardContentContainer}
            role="presentation"
            onClick={() => goToProductPage(product.id)}
          >
            <CardMedia
              src={product.img}
              component="img"
              className={classes.media}
              onError={onHandleImageLoadError}
            />
            <Box className={classes.cartContentInfo}>
              <Typography
                component="h2"
                align="center"
                className={classes.cardTitle}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body1"
                align="justify"
                className={classes.cardDescription}
              >
                {product.description}
              </Typography>
              <Typography variant="subtitle2" className={classes.cardPrice}>
                {`Cost: ${product.price}$`}
              </Typography>
            </Box>
          </div>
        </CardActionArea>
        <CardActions className={classes.cardFooter}>
          <Box className={classes.cardFooterActions}>
            <Button
              onClick={() => handleRemoveFromCart()}
              color="inherit"
              variant="contained"
              size="small"
            >
              Remove from cart
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

CartItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,

  addOrRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
