import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import ProductSlider from './components/CourtSlider';
import CourtItem from './components/CourtItem';

import useStyles from './CourtsListStyles';

const CourtsList = ({
  history,
  courtsList,
  requestAllCourts,
  getProfileRequest,
}) => {
  const classes = useStyles();

  const [contentToRender, setContentToRender] = useState([]);

  useEffect(() => {
    requestAllCourts();
    getProfileRequest();
  }, []);

  useEffect(() => {
    setContentToRender(courtsList)
  }, [courtsList]);

  return (
    <>
      <ProductSlider
        items={courtsList.filter((court) => court.id < 115).map((court) => court.image)}
      />
      <Grid container spacing={3} className={classes.root}>
        {(contentToRender.map((card) => (
          <CourtItem
            xs={6} sm={12}
            key={card.id}
            history={history}
            court={card}
          />
        )))}
      </Grid>
    </>
  );
};

CourtsList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

  courtsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,

  requestAllCourts: PropTypes.func.isRequired,
};

export default withRouter(CourtsList);
