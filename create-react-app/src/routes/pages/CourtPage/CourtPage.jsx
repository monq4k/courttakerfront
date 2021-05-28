import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import imageFallBack from '../../../assets/images/fallBack.jpg';

import useStyles from './CourtPageStyles';

const CourtPage = ({
  history,
  getOneCourtRequest,
  court,
}) => {
  const classes = useStyles();
  const [contentToRender, setContentToRender] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneCourtRequest(id);
  }, []);

  useEffect(() => {
    setContentToRender(court)
  }, [court]);

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.profileContainer}>
        <Typography variant="h2" component="h2" gutterBottom>
          Court Info
        </Typography>
        <Box className={classes.profileSectionContainer}>
          <Box
            border={2}
            borderRadius={30}
            className={classes.profileImageContainer}
          >
            <img src={contentToRender.image} className={classes.profileImage} onError={onHandleImageLoadError}></img>
          </Box>
          <Card className={classes.profileInfoContainer}>
            <CardContent className={classes.cardContent}>
              <Typography
                className={classes.profileInfoTextContainer}
                gutterBottom
              >
                Name:
                <Typography className={classes.profileInfoText} gutterBottom>
                  {`${contentToRender.name}`}
                </Typography>
              </Typography>
              <Typography
                className={classes.profileInfoTextContainer}
                gutterBottom
              >
                Address:
                <Typography className={classes.profileInfoText} gutterBottom>
                  {`${contentToRender.address}`}
                </Typography>
              </Typography>
              <Typography
                className={classes.profileInfoTextContainer}
                gutterBottom
              >
                Час роботи:
                <Typography className={classes.profileInfoText} gutterBottom>
                  07:00 - 19:00
                </Typography>
              </Typography>
            </CardContent>
            <CardActions className={classes.profileCardActions}>
              <Button
                variant="contained"
                color="secondary"
                // onClick={handleGoToTeamPageClick}
              >
                Забронювати
              </Button>
              <Button variant="contained" color="primary">
                Скасувати бронювання
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default withRouter(CourtPage);
