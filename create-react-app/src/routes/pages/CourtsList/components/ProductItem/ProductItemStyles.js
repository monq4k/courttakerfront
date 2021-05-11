import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
    marginBottom: '10px',
  },
  cardContainer: {
    height: '520px',
  },
  cardContentContainer: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  media: {
    height: '300px',
    border: '1px solid #000',
    borderRadius: '30px',
  },
  cardDescription: {
    marginTop: '20px',
    overflow: 'hidden',
    height: '50px',
  },
  cardFooter: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  cardFooterActions: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '215px',
  },
  cardFavoriteButton: {
    border: '1px solid #000',
    borderRadius: '30px',
    cursor: 'pointer',
  },
  cardAddToCartButton: {
    width: '155px',
  },
});

export default useStyles;
