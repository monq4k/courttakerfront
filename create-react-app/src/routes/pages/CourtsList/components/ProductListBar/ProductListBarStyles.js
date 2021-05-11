import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  filterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterViewContainer: {
    marginTop: '56px',
    display: 'flex',
    width: '550px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterListButton: {
    width: '250px',
  },
  filterSearch: {
    width: '250px',
    marginTop: '56px',
  },
});

export default useStyles;
