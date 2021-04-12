import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '400px',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: '20px',
    marginTop: '10px',
    textAlign: 'center',
  },
}));

export default useStyles;
