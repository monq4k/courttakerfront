import { connect } from 'react-redux';

import {
  addOrRemoveFromFavorite,
} from '../../../../../store/productList/actions';
import { addOrRemoveFromCart } from '../../../../../store/cart/actions';

const mapDispatchToProps = {
  addOrRemoveFromCart,
  addOrRemoveFromFavorite,
};

export default connect(null, mapDispatchToProps);
