import { connect } from 'react-redux';

import { loginRequest, logoutSuccess, signUpRequest, changeRememberMeSuccess } from '../../../store/login/actions';

const mapStateToProps = (state) => ({
  isRememberMe: state.login.isRememberMe,
});

const mapDispatchToProps = {
  loginRequest, logoutSuccess, signUpRequest, changeRememberMeSuccess
};

export default connect(mapStateToProps, mapDispatchToProps);
