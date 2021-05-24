import { connect } from 'react-redux';

import { loginRequest, logoutSuccess, signUpRequest } from '../../../store/login/actions';

const mapDispatchToProps = {
  loginRequest, logoutSuccess, signUpRequest
};

export default connect(null, mapDispatchToProps);
