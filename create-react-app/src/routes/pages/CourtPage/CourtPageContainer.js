import { connect } from 'react-redux';

import { getOneCourtRequest } from '../../../store/courts/actions';
import { bookCourtRequest, cancelBookingCourtRequest } from '../../../store/user/actions';

const mapStateToProps = (state) => ({
  court: state.courts.court,
  user: state.user.user,
  bookedCourtes: state.user.bookedCourtes,
});

const mapDispatchToProps = {
  getOneCourtRequest,
  bookCourtRequest,
  cancelBookingCourtRequest,
};

export default connect(mapStateToProps, mapDispatchToProps);
