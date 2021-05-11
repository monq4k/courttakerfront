import { connect } from 'react-redux';

import { requestAllOrders } from '../../../store/orders/actions';

const mapStateToProps = (state) => ({
  orders: state.orders.list,
});

const mapDispatchToProps = {
  requestAllOrders,
};

export default connect(mapStateToProps, mapDispatchToProps);
