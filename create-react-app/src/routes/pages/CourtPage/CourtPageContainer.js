import { connect } from 'react-redux';

import { getOneCourtRequest } from '../../../store/courts/actions';

const mapStateToProps = (state) => ({
  court: state.courts.court,
  user: state.user.user,
});

const mapDispatchToProps = {
  getOneCourtRequest,
};

export default connect(mapStateToProps, mapDispatchToProps);
