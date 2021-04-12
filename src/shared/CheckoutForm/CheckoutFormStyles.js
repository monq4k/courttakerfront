import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    width: '300px',
    marginTop: '20px',
  },
  phoneInputContainer: {
    marginLeft: '-40px',
  },
  formActionContainer: {
    margin: '60px auto 0 auto',
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formButton: {
    width: '140px',
  },
});

export default useStyles;
