import { connect } from 'react-redux';

import { addOrRemoveFromCart, deleteAllProducts } from '../../../../../store/cart/actions';

const mapDispatchToProps = {
  addOrRemoveFromCart,
  deleteAllProducts,
};

export default connect(null, mapDispatchToProps);
