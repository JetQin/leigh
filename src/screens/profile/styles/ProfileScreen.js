import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  avatarContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBlueColor',
  },
  wordContainer: {
    // flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // float: 'right',
    alignItems: 'center',
  },
  followContainer: {
    // flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paneContainer: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '$blackBlueColor',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  moneyContainer: {
    // flex: 0.,
    flexDirection: 'row',
    backgroundColor: '$blackBlueColor',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.1,
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
