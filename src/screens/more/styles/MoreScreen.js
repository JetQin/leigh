import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.$blackBlueColor,
  },
  aboutContainer: {
    flex: 0.4,
  },
  subscribeContainer: {
    flex: 0.4,
  },
  descriptionContainer: {
    flex: 0.1,

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
  description: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    color: '$whiteColor',
    left: '2%',
  },
});

export default styles;
