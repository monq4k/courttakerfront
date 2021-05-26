import { connect } from 'react-redux';

import { requestAllCourts } from '../../../store/courts/actions';
import { getProfileRequest } from '../../../store/user/actions';

const mapStateToProps = (state) => ({
  courtsList: state.courts.courts,
});

const mapDispatchToProps = {
    requestAllCourts,
    getProfileRequest,
};

export default connect(mapStateToProps, mapDispatchToProps);
