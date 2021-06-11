import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
  noOrdersContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myOrdersTitle: {
    fontSize: '38px',
    marginTop: '100px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonToMain: {
    fontSize: '18px',
    textAlign: 'center',
    margin: '0 auto',
  }
});

export default useStyles;
