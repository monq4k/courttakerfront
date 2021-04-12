import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Card,
  Typography,
  Box,
} from '@material-ui/core';

import useStyles from './OrdersPageStyles';

const OrdersPage = ({ requestAllOrders, orders }) => {
  const classes = useStyles();

  useEffect(() => {
    requestAllOrders();
  }, []);

  return (
    <Grid container className={classes.root}>
      {orders.map((order) => (
        <Grid key={order.id} item xs={12} className={classes.orderItem}>
          <Card className={classes.orderItemContainer}>
            <Typography
              variant="body1"
              align="center"
              className={classes.orderName}
            >
              {`Name: ${order.name}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.orderEmail}
            >
              {`Email: ${order.email}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.orderAddress}
            >
              {`Location: ${order.address}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.orderPhone}
            >
              {`Phone: ${order.phone}`}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.orderTotalCost}
            >
              {`Sum: ${order.products.reduce((acc, product) => acc + product.price, 0)}`}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

OrdersPage.propTypes = {
  requestAllOrders: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default OrdersPage;
