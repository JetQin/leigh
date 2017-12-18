import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  headerContainer: {
    color: '$whiteColor',
    justifyContent: 'center',
  },
  title: {
    color: Colors.$whiteColor,
    fontSize: 20,
    fontFamily: 'montserrat',
  },
  headerTitle: {
    color: '$blackColor',
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
  bottomContainer: {
    flex: 1,
  },

});

export default styles;
