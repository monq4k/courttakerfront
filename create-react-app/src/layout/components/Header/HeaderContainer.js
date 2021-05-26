import { connect } from 'react-redux';

import { logoutSuccess } from '../../../store/login/actions';

const mapStateToProps = (state) => ({
  fullName: state.user.user.fullName,
});

const mapDispatchToProps = {
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps);
