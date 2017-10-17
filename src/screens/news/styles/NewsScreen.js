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

  bottomContainer: {
    flex: 1,
  },

});

export default styles;
