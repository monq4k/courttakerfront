import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyFilterContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  emptyFilterIcon: {
    fontSize: '100px',
  },
  emptyFilterText: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default useStyles;
