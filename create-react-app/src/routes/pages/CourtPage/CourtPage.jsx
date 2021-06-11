import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import imageFallBack from "../../../assets/images/fallBack.jpg";
import Modal from "../../../components/Modal";

import useStyles from "./CourtPageStyles";

const CourtPage = ({ history, getOneCourtRequest, court, user, bookedCourtes, bookCourtRequest, cancelBookingCourtRequest }) => {
  const classes = useStyles();
  const [isCourtBooked, setIsCourtBooked] = useState(false);
  const [buttonsToRender, setButtonsToRender] = useState();
  const [contentToRender, setContentToRender] = useState({});
  const notifyError = () =>
    toast.error("⚠️ Вы не можете выбрать больше чем 2 часа!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifySuccess = (message) =>
    toast.success(`✅ ${message}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [timeButtons, setTimeButtons] = useState([]);
  const [timeButtonsResult, setTimeButtonsResult] = useState([]);

  const { id } = useParams();

  const [isOpen, setOpen] = React.useState(false);

  const handleOpenBookModal = () => {
    setOpen(true);
    initButtonsList();
    renderButtons();
  };

  const handleCloseBookModal = () => {
    setOpen(false);
    initButtonsList();
    setTimeButtonsResult([]);
  };

  useEffect(() => {
    isCourtBookedFilter();
    getOneCourtRequest(id);
    initButtonsList();
    renderButtons();
  }, []);

  useEffect(() => {
    setContentToRender(court);
  }, [court]);

  const isCourtBookedFilter = () => {
    if (!bookedCourtes) {
      return;
    }
    const result = !!bookedCourtes.find((userCourt) => userCourt.idCourt === +id && userCourt.idUser === user.id);
    
    setIsCourtBooked(result);
  }

  const onHandleImageLoadError = (e) => {
    e.target.src = imageFallBack;
  };

  const initButtonsList = () => {
    const result = [];
    for (let i = 0; i < 12; i++) {
      result[i] = { time: `${7 + i}:00`, checked: false };
    }
    setTimeButtons(result);
  };

  const renderButtons = () => {
    const result = timeButtons.map((button, index) => {
      return (
        <Button
          variant="contained"
          key={index}
          disabled={!!bookedCourtes.find((bookedCourt) => bookedCourt.idCourt === +id && bookedCourt.time.includes(button.time))}
          className={classes.modalButton}
          onClick={() => handleTimeButtonClicked(index)}
          color={button.checked ? "secondary" : `inherit`}
        >{`${button.time}`}</Button>
      );
    });
    setButtonsToRender(result);
  };

  const handleTimeButtonClicked = (index) => {
    timeButtons[index].checked = !timeButtons[index].checked;
    const result = timeButtons
      .filter((button) => !!button.checked)
      .map((button) => button.time);
    if (result.length > 2) {
      notifyError();
      return;
    }
    setTimeButtonsResult(result);
    renderButtons();
  };

  const handleSubmitTimeClick = () => {
    const bookResult = {
      idUser: user.id,
      idCourt: +id,
      time: timeButtonsResult,
    }
    bookCourtRequest(bookResult);
    setIsCourtBooked(true);
    notifySuccess("Вы забронировали площадку!");
    setOpen(false);
  };

  const handleCancelBookingClick = () => {
    cancelBookingCourtRequest(+id, user.id);
    setIsCourtBooked(false);
    notifySuccess("Бронирование площадки успешно отменено!");
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.profileContainer}>
          <Typography variant="h2" component="h2" gutterBottom>
            Информация про площадку:
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
                <div
                  className={classes.profileInfoTextContainer}
                >
                  Название:
                  <Typography className={classes.profileInfoText} gutterBottom>
                    {`${contentToRender.name}`}
                  </Typography>
                </div>
                <div
                  className={classes.profileInfoTextContainer}
                >
                  Адрес:
                  <Typography className={classes.profileInfoText} gutterBottom>
                    {`${contentToRender.address}`}
                  </Typography>
                </div>
                <div
                  className={classes.profileInfoTextContainer}
                >
                  Время работы:
                  <Typography className={classes.profileInfoText} gutterBottom>
                    07:00 - 19:00
                  </Typography>
                </div>
              </CardContent>
              <CardActions className={classes.profileCardActions}>
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={isCourtBooked}
                  className={classes.profileFirstButton}
                  onClick={handleOpenBookModal}
                >
                  Забронировать
                </Button>
                {isCourtBooked && <Button variant="contained" color="primary" onClick={handleCancelBookingClick}>
                  Отменить бронирование
                </Button>}
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Container>
      <Modal isOpen={isOpen} handleClose={handleCloseBookModal}>
        <h3 className={classes.modalTItle}>Выберите время для бронирования!</h3>
        <Typography gutterBottom className={classes.modalDescription}>
          Вы можете забронировать площадку не больше чем 2 часа!.
        </Typography>
        <Box className={classes.modalButtonsContainer}>{buttonsToRender}</Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.modalSubmitButton}
          onClick={handleSubmitTimeClick}
        >
          Подтвердить бронирование
        </Button>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default withRouter(CourtPage);
