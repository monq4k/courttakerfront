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

  const handleGoToTeamPageClick = () => {
    history.push(ROUTES.TEAM);
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.profileContainer}>
          <Typography variant="h2" component="h2" gutterBottom>
            Profile Info
          </Typography>
          <Box className={classes.profileSectionContainer}>
            <Box border={2} borderRadius={30} className={classes.profileImageContainer}>
              <img src={userImage} className={classes.profileImage}></img>
            </Box>
            <Card className={classes.profileInfoContainer}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.profileInfoTextContainer} gutterBottom>
                  First Name:
                  <Typography className={classes.profileInfoText} gutterBottom>
                    {`${user.fullName.split(' ')[0]}`}
                  </Typography>
                </Typography>
                <Typography className={classes.profileInfoTextContainer} gutterBottom>
                  Second Name:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.fullName.split(' ')[1]}`}
                  </Typography>
                </Typography>
                <Typography className={classes.profileInfoTextContainer} gutterBottom>
                  Email:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.email}`}
                  </Typography>
                </Typography>
                <Typography className={classes.profileInfoTextContainer} gutterBottom>
                  Hours played:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.hoursPlayed}`}
                  </Typography>
                </Typography>
                <Typography className={classes.profileInfoTextContainer} gutterBottom>
                  Team:
                  <Typography className={classes.profileInfoText} gutterBottom>
                  {`${user.team ? user.team.name : 'no team'}`}
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className={classes.profileCardActions}>
                <Button variant="contained" color="secondary" onClick={handleGoToTeamPageClick}>
                  Сторiнка команд
                </Button>
                <Button variant="contained" color="primary">
                  Мої бронювання
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
