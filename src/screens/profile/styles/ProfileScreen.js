import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
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
});

export default styles;
