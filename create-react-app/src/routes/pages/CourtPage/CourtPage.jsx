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
} from '@material-ui/core';

import imageFallBack from '../../../assets/images/fallBack.jpg';
import Modal from '../../../components/Modal';

import useStyles from './CourtPageStyles';

const CourtPage = ({ history, getOneCourtRequest, court }) => {
  const classes = useStyles();
  const [contentToRender, setContentToRender] = useState({});
  
  const [timeButtons, setTimeButtons] = useState([]);
  const [timeButtonsResult, setTimeButtonsResult] = useState([]);

  const { id } = useParams();

  const [isOpen, setOpen] = React.useState(false);

  const handleOpenBookModal = () => {
    setOpen(true);
  };

  const handleCloseBookModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    getOneCourtRequest(id);
    initButtonsList();
  }, []);

  useEffect(() => {
    setContentToRender(court);
  }, [court]);

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  const initButtonsList = () => {
    const result = [];
    for (let i = 0; i < 12; i++) {
      result[i] = {time: `${7 + i}:00`, checked: false};
    }
    setTimeButtons(result);
  };

  const handleTimeButtonClicked = (index) => {
    timeButtons[index].checked = !timeButtons[index].checked;
  };

  return (
    <>
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
              <img
                alt="court"
                src={contentToRender.image}
                className={classes.profileImage}
                onError={onHandleImageLoadError}
              ></img>
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
                  className={classes.profileFirstButton}
                  onClick={handleOpenBookModal}
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
      <Modal isOpen={isOpen} handleClose={handleCloseBookModal}>
        <h3 className={classes.modalTItle}>Pick Your Time!</h3>
        <Typography gutterBottom className={classes.modalDescription}>
          You can pick not more than 2 hours for booking this court.
        </Typography>
        <Box className={classes.modalButtonsContainer}>
          {timeButtons.map((button, index) => {
            return (
              <Button
                variant="contained"
                className={classes.modalButton}
                onClick={() => handleTimeButtonClicked(index)}
                color={button.checked ? 'primary' : `inherit`}
              >{`${button.time}`}</Button>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default withRouter(CourtPage);
