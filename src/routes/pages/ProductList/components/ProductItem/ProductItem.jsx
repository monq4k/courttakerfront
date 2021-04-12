import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardActionArea,
  Button,
  Box,
} from '@material-ui/core';
import { StarBorder } from '@material-ui/icons';

import useStyles from './ProductItemStyles';
import imageFallBack from '../../../../../assets/images/fallBack.jpg';
import { ROUTES } from '../../../../../constants';

const ProductItem = ({
  history,
  card,
  addOrRemoveFromCart,
  addOrRemoveFromFavorite,
  isInFavorite,
  isInCart,
}) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(isInFavorite);
  const [isBought, setIsBought] = useState(isInCart);

  const handleAddOrRemoveToCart = () => {
    setIsBought(!isBought);
    addOrRemoveFromCart(card);
  };

  const handleAddOrRemoveToFavorite = () => {
    setIsFavorite(!isFavorite);
    addOrRemoveFromFavorite(card);
  };

  const goToProductPage = (id) => {
    history.push(`${ROUTES.MAIN}/${id}`);
  };

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  return (
    <Grid item xs={5} key={card.id} className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <div
            role="presentation"
            className={classes.cardContentContainer}
            onClick={() => goToProductPage(card.id)}
          >
            <Typography
              component="h2"
              align="center"
              className={classes.cardTitle}
            >
              {card.title}
            </Typography>
            <CardMedia
              src={card.img}
              component="img"
              className={classes.media}
              onError={onHandleImageLoadError}
            />
            <Typography
              variant="body1"
              align="justify"
              className={classes.cardDescription}
            >
              {card.description.length > 100
                ? `${card.description.slice(0, 101)}...`
                : card.description}
            </Typography>
          </div>
        </CardActionArea>
        <CardActions className={classes.cardFooter}>
          <Typography variant="subtitle2" className={classes.cardPrice}>
            {`${card.price}$`}
          </Typography>
          <Box className={classes.cardFooterActions}>
            <StarBorder
              onClick={() => handleAddOrRemoveToFavorite()}
              fontSize="large"
              className={classes.cardFavoriteButton}
              style={{
                backgroundColor: isFavorite ? 'yellow' : 'initial',
              }}
            />
            <Button
              className={classes.cardAddToCartButton}
              onClick={() => handleAddOrRemoveToCart()}
              color={isBought ? 'secondary' : 'inherit'}
              variant="contained"
              size="small"
            >
              {!isBought ? 'Add to cart' : 'Remove from cart'}
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

ProductItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,

  addOrRemoveFromCart: PropTypes.func.isRequired,
  addOrRemoveFromFavorite: PropTypes.func.isRequired,

  isInFavorite: PropTypes.bool.isRequired,
  isInCart: PropTypes.bool.isRequired,
};

export default ProductItem;
