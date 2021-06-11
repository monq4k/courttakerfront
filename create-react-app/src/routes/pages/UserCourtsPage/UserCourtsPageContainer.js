import { connect } from 'react-redux';

import { requestAllCourts } from '../../../store/courts/actions';

const mapStateToProps = (state) => ({
  courtsList: state.courts.courts,
  user: state.user.user,
  bookedCourtes: state.user.bookedCourtes,
});

const mapDispatchToProps = {
    requestAllCourts,
};

export default connect(mapStateToProps, mapDispatchToProps);
