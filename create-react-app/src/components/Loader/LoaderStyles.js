import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '-80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    height: '100vh',
    width: '100%',
    zIndex: '99999',
    backgroundColor: 'rgba(1,1,1,0.5)',
  },
}));

export default useStyles;
