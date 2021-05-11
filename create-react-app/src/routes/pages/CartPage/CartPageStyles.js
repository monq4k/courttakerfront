import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    display: 'flex',
  },
  cleanCartButton: {
    width: '185px',
    marginRight: '0',
    marginLeft: 'auto',
    display: 'flex',
    marginTop: '130px',
    marginBottom: '20px',
  },
  cartFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '500px',
    margin: '0 auto',
  },
  cartTotal: {
    marginTop: '50px',
    marginBottom: '30px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  checkoutButton: {
    marginTop: '16px',
    width: '185px',
  },
  returnButton: {
    width: '195px',
    marginTop: '16px',
    position: 'absolute',
    top: '56%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  emptyCartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '43%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  emptyCartIcon: {
    fontSize: '164px',
  },
  emptyCartText: {
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default useStyles;
