import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackBlueColor',
  },
  avatar: {
    flex: 4,
    marginTop: 45,
  },
  titleContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    top: '2%',
  },
  bottomContainer: {
    flex: 0.5,
  },
  title: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
  },
  signinBtn: {
    top: '1%',
    paddingTop: 0,
  },
  bottom: {
    top: 20,
  },
});

export default styles;
