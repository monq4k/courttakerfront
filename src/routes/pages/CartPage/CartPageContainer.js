import { connect } from 'react-redux';

import { deleteAllProducts, requestCreateOrder } from '../../../store/cart/actions';

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

const mapDispatchToProps = {
  deleteAllProducts,
  requestCreateOrder,
};

export default connect(mapStateToProps, mapDispatchToProps);
