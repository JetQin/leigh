import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  title: {
    color: '$whiteColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },

});

export default styles;
