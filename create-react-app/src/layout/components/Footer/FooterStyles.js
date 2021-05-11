import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  footerWrapper: {
    textAlign: 'center',
    minHeight: '8vh',
    backgroundColor: '#c5cae9',
    display: 'flex',
    alignItems: 'center',
  },
  footerContainer: {
    verticalAlign: 'center',
  },
}));

export default useStyles;
