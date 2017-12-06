import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  titleText: {
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'montserrat',
    fontWeight: 'bold',
  },
  root: {
    flex: 1,
    backgroundColor: '$blackBlueColor',
  },
});

export default styles;
