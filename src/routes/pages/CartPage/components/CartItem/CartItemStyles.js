import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '15px',
    height: '200px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContentContainer: {
    display: 'flex',
    padding: '20px',
  },
  cartContentInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  media: {
    height: '150px',
    width: '50%',
    border: '1px solid #000',
    borderRadius: '30px',
  },
  cardDescription: {
    marginTop: '20px',
    overflow: 'hidden',
    fontSize: '16px',
    height: '50px',
  },
  cardFooter: {
    marginTop: '70px',
    height: '10px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
});

export default useStyles;
