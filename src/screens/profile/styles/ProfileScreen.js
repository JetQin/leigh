import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  avatarContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBlueColor',
  },
  settingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  paneContainer: {
    flex: 0.7,
    backgroundColor: '$blackBlueColor',
  },
  bottomContainer: {
    flex: 1,
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  headerTitle: {
    color: '$whiteColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
  },
});

export default styles;
