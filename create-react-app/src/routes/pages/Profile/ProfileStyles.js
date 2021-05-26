import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    display: 'flex',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  profileSectionContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '30px',
  },
  profileImageContainer: {
    display: 'flex',
    width: '54%',
    height: '449px',
    padding: '10px',
  },
  profileImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    padding: '10px',
    borderRadius: '30px',
  },
  cardContent: {
    width: '80%',
  },
  profileInfoTextContainer: {
    display: 'flex',
    fontSize: '22px',
    justifyContent: 'space-between',
  },
  profileInfoText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  profileCardActions: {
    padding: '50px',
  }
});

export default useStyles;
