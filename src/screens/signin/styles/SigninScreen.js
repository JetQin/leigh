import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackBlueColor',
  },
  avatar: {
    flex: 4,
    marginTop: 75,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    top: '2%',
  },
  title: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
  },
  signinBtn: {
    top: '1%',
    paddingTop: 10,
  },
  bottom: {
    top: 20,
  },
});

export default styles;
