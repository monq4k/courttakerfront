import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Typography,
  Box,
  Button,
  Card,
  Container,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { Delete, RemoveShoppingCart } from '@material-ui/icons';

import userImage from '../../../assets/images/userImage.jpg';

import useStyles from './ProfileStyles';
import { ROUTES } from '../../../constants';

const Profile = ({
  history,
  user
}) => {
  const classes = useStyles();

  const handleGoToMyBooksClick = () => {
    history.push(ROUTES.USER_COURTS);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.profileContainer}>
          <Typography variant="h2" component="h2" gutterBottom>
            Профиль
          </Typography>
          <Box className={classes.profileSectionContainer}>
            <Box border={2} borderRadius={30} className={classes.profileImageContainer}>
              <img src={userImage} className={classes.profileImage}></img>
            </Box>
            <Card className={classes.profileInfoContainer}>
              <CardContent className={classes.cardContent}>
                <div className={classes.profileInfoTextContainer} >
                  Имя:
                  <Typography className={classes.profileInfoText} gutterBottom>
                    {`${user.fullName.split(' ')[0]}`}
                  </Typography>
                </div>
                <div className={classes.profileInfoTextContainer} >
                  Фамилия:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.fullName.split(' ')[1]}`}
                  </Typography>
                </div>
                <div className={classes.profileInfoTextContainer} >
                  Почта:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.email}`}
                  </Typography>
                </div>
                <div className={classes.profileInfoTextContainer} >
                  Часов отыграно:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.hoursPlayed}`}
                  </Typography>
                </div>
                <div className={classes.profileInfoTextContainer} >
                  Команда:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.team ? user.team.name : 'no team'}`}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className={classes.profileCardActions}>
                <Button variant="contained" color="primary" onClick={handleGoToMyBooksClick}>
                  Мои бронирования
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default withRouter(Profile);
