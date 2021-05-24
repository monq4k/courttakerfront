import React from 'react';
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

import useStyles from './CourtItemStyles';
import imageFallBack from '../../../../../assets/images/fallBack.jpg';
import { ROUTES } from '../../../../../constants';

const CourtItem = ({
  history,
  court,
}) => {
  const classes = useStyles();

  const goToCourtPage = (id) => {
    history.push(`${ROUTES.MAIN}/${id}`);
  };

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  return (
    <Grid item xs={5} key={court.id} className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <div
            role="presentation"
            className={classes.cardContentContainer}
            onClick={() => goToCourtPage(court.id)}
          >
            <Typography
              component="h2"
              align="center"
              className={classes.cardTitle}
            >
              {court.name}
            </Typography>
            <CardMedia
              src={court.image}
              component="img"
              className={classes.media}
              onError={onHandleImageLoadError}
            />
            <Typography
              variant="body1"
              align="justify"
              className={classes.cardDescription}
            >
              {court.address}
            </Typography>
          </div>
        </CardActionArea>
        <CardActions className={classes.cardFooter}>
          <Box className={classes.cardFooterActions}>
            <Button
              className={classes.cardAddToCartButton}
              // onClick={() => handleAddOrRemoveToCart()}
              color='secondary'
              variant="contained"
              size="small"
            >
              Забронювати
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

CourtItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  court: PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

};

export default CourtItem;
