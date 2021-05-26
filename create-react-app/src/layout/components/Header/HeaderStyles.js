import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  headerTitle: {
    marginLeft: theme.spacing(1),
  },
  headerActionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
  },
  button: {
    display: 'flex',
    justifyContent: 'space-around',
    width: theme.spacing(15),
    marginLeft: theme.spacing(3),
  },
  headerCartAmount: {
    border: '1px solid #000',
    borderRadius: '30px',
    backgroundColor: 'yellow',
    fontSize: '12px',
    width: '16px',
  },
  profileWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  profileName: {
    marginLeft: '5px',
    fontSize: '16px',
  }
}));

export default useStyles;
