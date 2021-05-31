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
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: '30px',
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
  },
  profileInfoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '40px',
    textAlign: 'center'
  },
  profileCardActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '25%',
  },
  profileFirstButton: {
    marginBottom: '15px',
  },
  modalButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  modalButton: {
    margin: '5px',
  }
});

export default useStyles;
