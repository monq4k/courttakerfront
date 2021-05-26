import { connect } from 'react-redux';

import { getProfileRequest } from '../../../store/user/actions';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

// const mapDispatchToProps = {
  
// };

export default connect(mapStateToProps, null);
