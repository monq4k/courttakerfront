import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { Button, Grid } from "@material-ui/core";

import CourtItem from "./components/CourtItem";

import useStyles from "./UserCourtsPageStyles";
import { ROUTES } from "../../../constants";

const UserCourtsPage = ({
  history,
  user,
  courtsList,
  requestAllCourts,
  bookedCourtes,
}) => {
  const classes = useStyles();

  const [contentToRender, setContentToRender] = useState([]);

  useEffect(() => {
    const result = courtsList.filter((court) => {
      return getBookedCourtsIds().includes(court.id)
    })
    setContentToRender(result);
  }, []);

  const getBookedCourtsIds = () => {
    const result = bookedCourtes.map((court) => {
      if (court.idUser === user.id) {
        return court.idCourt;
      }
    });

    const filteredResult = result.filter(id => id !== undefined);
    return filteredResult;
  };

  const handleReturnToMainClick = () => {
    history.push(ROUTES.MAIN);
  };

  return (
    <>
      {contentToRender.length > 0 ? (
        <>
          <h1 className={classes.myOrdersTitle}>Мои бронирования</h1>
          <Grid container spacing={3} className={classes.root}>
            {contentToRender.map((card) => (
              <CourtItem
                xs={6}
                sm={12}
                key={card.id}
                history={history}
                court={card}
              />
            ))}
          </Grid>
        </>
      ) : (
        <div className={classes.noOrdersContainer}>
          <h2 className={classes.myOrdersTitle}>
            Вы не забронировали ни одной площадки.
          </h2>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttonToMain}
            onClick={handleReturnToMainClick}
          >
            Вернуться на главную страницу
          </Button>
        </div>
      )}
    </>
  );
};

export default withRouter(UserCourtsPage);
