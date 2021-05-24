import { connect } from 'react-redux';

import { loginRequest } from '../../../store/login/actions';

const mapStateToProps = (state) => ({
  isLoged: state.login.isLoged,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps);
